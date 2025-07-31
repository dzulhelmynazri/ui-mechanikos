import path from "path"
import chalk from "chalk"
import fs from "fs-extra"
import inquirer from "inquirer"
import ora from "ora"

import { getProjectConfig } from "../utils/config.js"
import {
  getAvailableComponents,
  getComponentDependencies,
  getComponentSource,
} from "../utils/registry.js"

interface AddOptions {
  yes?: boolean
  dryRun?: boolean
}

export async function addComponent(componentName: string, options: AddOptions) {
  const spinner = ora("Checking available components...").start()

  try {
    // Get available components
    const availableComponents = await getAvailableComponents()

    if (!availableComponents.includes(componentName)) {
      spinner.fail()
      console.error(chalk.red(`Component "${componentName}" not found.`))
      console.log(chalk.yellow("Available components:"))
      availableComponents.forEach((comp) => {
        console.log(`  - ${comp}`)
      })
      return
    }

    spinner.succeed("Component found")

    // Get project configuration
    const config = await getProjectConfig()

    if (!config) {
      spinner.fail()
      console.error(
        chalk.red('Project not initialized. Run "ui-mechanikos init" first.')
      )
      return
    }

    // Confirm installation
    if (!options.yes) {
      const { confirm } = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `Add component "${componentName}" to your project?`,
          default: true,
        },
      ])

      if (!confirm) {
        console.log(chalk.yellow("Operation cancelled."))
        return
      }
    }

    spinner.start("Adding component...")

    if (options.dryRun) {
      spinner.stop()
      console.log(chalk.blue("DRY RUN - No files will be created"))
      console.log(chalk.green(`Would add component: ${componentName}`))
      console.log(chalk.green(`Target directory: ${config.componentsDir}`))
      return
    }

    // Copy component files
    await copyComponentFiles(componentName, config)

    spinner.succeed(`Successfully added ${componentName} component`)
    console.log(
      chalk.green(
        `\nComponent added to: ${config.componentsDir}/${componentName}`
      )
    )
    console.log(chalk.blue("\nNext steps:"))
    console.log(`1. Import the component in your code`)
    console.log(`2. Add any required dependencies`)
    console.log(`3. Customize the component as needed`)
  } catch (error) {
    spinner.fail()
    throw error
  }
}

async function copyComponentFiles(componentName: string, config: any) {
  // Get component source from registry
  const componentSource = await getComponentSource(componentName)

  if (!componentSource) {
    throw new Error(`Component source not found for ${componentName}`)
  }

  // Create target file path
  const targetFile = path.join(config.componentsDir, `${componentName}.tsx`)

  // Ensure target directory exists
  await fs.ensureDir(path.dirname(targetFile))

  // Write component file
  await fs.writeFile(targetFile, componentSource)

  // Get and display dependencies
  const dependencies = await getComponentDependencies(componentName)
  if (dependencies.length > 0) {
    console.log(chalk.yellow("\nDependencies to install:"))
    dependencies.forEach((dep) => {
      console.log(`  - ${dep}`)
    })
    console.log(chalk.blue("\nRun: npm install <dependencies> to install them"))
  }
}

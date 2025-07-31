import path from "path"
import chalk from "chalk"
import fs from "fs-extra"
import inquirer from "inquirer"

interface InitOptions {
  yes?: boolean
}

export async function init(options: InitOptions) {
  console.log(chalk.blue("🚀 Initializing ui-mechanikos in your project..."))

  try {
    // Check if already initialized
    const configPath = path.join(process.cwd(), "ui-mechanikos.json")
    if (await fs.pathExists(configPath)) {
      console.log(
        chalk.yellow("Project already initialized with ui-mechanikos.")
      )
      return
    }

    // Get project configuration
    let config = {
      componentsDir: "components/ui",
      style: "default",
      typescript: true,
      tailwind: true,
    }

    if (!options.yes) {
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "componentsDir",
          message: "Where should components be installed?",
          default: "components/ui",
        },
        {
          type: "list",
          name: "style",
          message: "Which style would you like to use?",
          choices: [
            { name: "Default", value: "default" },
            { name: "New York", value: "new-york" },
          ],
          default: "default",
        },
        {
          type: "confirm",
          name: "typescript",
          message: "Use TypeScript?",
          default: true,
        },
        {
          type: "confirm",
          name: "tailwind",
          message: "Use Tailwind CSS?",
          default: true,
        },
      ])

      config = { ...config, ...answers }
    }

    // Create configuration file
    await fs.writeJson(configPath, config, { spaces: 2 })

    // Create components directory
    await fs.ensureDir(config.componentsDir)

    // Create example component
    const exampleComponent = generateExampleComponent(config)
    const examplePath = path.join(config.componentsDir, "example.tsx")
    await fs.writeFile(examplePath, exampleComponent)

    console.log(chalk.green("✅ Successfully initialized ui-mechanikos!"))
    console.log(chalk.blue("\nConfiguration:"))
    console.log(`  Components directory: ${config.componentsDir}`)
    console.log(`  Style: ${config.style}`)
    console.log(`  TypeScript: ${config.typescript ? "Yes" : "No"}`)
    console.log(`  Tailwind CSS: ${config.tailwind ? "Yes" : "No"}`)

    console.log(chalk.blue("\nNext steps:"))
    console.log("1. Add components with: ui-mechanikos add <component-name>")
    console.log("2. Import components in your code")
    console.log("3. Customize components as needed")
  } catch (error) {
    console.error(chalk.red("Error initializing project:"), error)
    throw error
  }
}

function generateExampleComponent(config: any): string {
  if (config.typescript) {
    return `import React from 'react'

interface ExampleProps {
  children?: React.ReactNode
}

export function Example({ children }: ExampleProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Example Component</h2>
      {children}
    </div>
  )
}
`
  } else {
    return `import React from 'react'

export function Example({ children }) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Example Component</h2>
      {children}
    </div>
  )
}
`
  }
}

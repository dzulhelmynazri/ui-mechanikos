#!/usr/bin/env node

import { Command } from "commander"
import chalk from "chalk"
import { addComponent } from "./commands/add.js"
import { init } from "./commands/init.js"
import { version } from "../package.json" assert { type: "json" }

const program = new Command()

program
  .name("ui-mechanikos")
  .description("CLI for adding UI components to your project")
  .version(version)

program
  .command("add <component>")
  .description("Add a component to your project")
  .option("-y, --yes", "Skip confirmation prompts")
  .option("-d, --dry-run", "Show what would be added without making changes")
  .action(async (component, options) => {
    try {
      await addComponent(component, options)
    } catch (error) {
      console.error(
        chalk.red("Error:"),
        error instanceof Error ? error.message : String(error)
      )
      process.exit(1)
    }
  })

program
  .command("init")
  .description("Initialize ui-mechanikos in your project")
  .option("-y, --yes", "Skip confirmation prompts")
  .action(async (options) => {
    try {
      await init(options)
    } catch (error) {
      console.error(
        chalk.red("Error:"),
        error instanceof Error ? error.message : String(error)
      )
      process.exit(1)
    }
  })

program.parse()

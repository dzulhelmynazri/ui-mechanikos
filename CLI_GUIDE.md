# How to Create Your Own CLI Like `ui-mechanikos`

This guide shows you how to create a CLI that can be used with `pnpm dlx ui-mechanikos@latest add accordion`.

## Overview

The CLI I've created for you consists of:

1. **CLI Package Structure** (`cli/` directory)
2. **Command System** (add, init commands)
3. **Registry Integration** (reads from your existing registry)
4. **Project Configuration** (manages user project settings)

## File Structure

```
cli/
├── package.json          # CLI package configuration
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── index.ts          # Main CLI entry point
│   ├── commands/
│   │   ├── add.ts        # Add component command
│   │   └── init.ts       # Initialize project command
│   └── utils/
│       ├── config.ts     # Project configuration utilities
│       └── registry.ts   # Registry reading utilities
├── dist/                 # Compiled JavaScript (generated)
└── README.md            # CLI documentation
```

## Key Components

### 1. Package Configuration (`cli/package.json`)

```json
{
  "name": "ui-mechanikos",
  "bin": {
    "ui-mechanikos": "./dist/index.js"
  }
}
```

The `bin` field tells npm that this package provides an executable command.

### 2. Main Entry Point (`cli/src/index.ts`)

```typescript
#!/usr/bin/env node
import { Command } from "commander"

import { addComponent } from "./commands/add.js"
import { init } from "./commands/init.js"

const program = new Command()

program
  .command("add <component>")
  .description("Add a component to your project")
  .action(async (component, options) => {
    await addComponent(component, options)
  })

program.parse()
```

### 3. Registry Integration (`cli/src/utils/registry.ts`)

This reads from your existing registry structure:

```typescript
export async function getAvailableComponents(): Promise<string[]> {
  const registryPath = await getRegistryPath()
  const uiDir = path.join(registryPath, "new-york-v4", "ui")

  // Read actual component files from your registry
  const files = await fs.readdir(uiDir)
  return files
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => f.replace(".tsx", ""))
}
```

## How It Works

### 1. User runs: `pnpm dlx ui-mechanikos@latest add accordion`

### 2. pnpm downloads and executes the CLI

### 3. CLI reads your registry and copies the component

### 4. Component is added to user's project with dependencies listed

## Publishing Your CLI

### Step 1: Build the CLI

```bash
cd cli
npm install
npm run build
```

### Step 2: Publish to npm

```bash
npm login
npm publish
```

### Step 3: Test the CLI

```bash
pnpm dlx ui-mechanikos@latest init
pnpm dlx ui-mechanikos@latest add accordion
```

## Advanced Features

### 1. Remote Registry

Instead of reading from local files, you could:

```typescript
export async function getComponentSource(
  componentName: string
): Promise<string> {
  const response = await fetch(
    `https://your-cdn.com/components/${componentName}.tsx`
  )
  return response.text()
}
```

### 2. Dependency Management

```typescript
export async function installDependencies(
  dependencies: string[]
): Promise<void> {
  const { execSync } = await import("child_process")
  execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" })
}
```

### 3. Template System

```typescript
export async function generateComponent(
  componentName: string,
  config: any
): Promise<string> {
  const template = await getTemplate(componentName)
  return template
    .replace(/\{\{componentName\}\}/g, componentName)
    .replace(/\{\{style\}\}/g, config.style)
}
```

## Customization Options

### 1. Add More Commands

```typescript
program
  .command("list")
  .description("List all available components")
  .action(async () => {
    const components = await getAvailableComponents()
    console.log(components.join("\n"))
  })
```

### 2. Add Interactive Prompts

```typescript
const { component } = await inquirer.prompt([
  {
    type: "list",
    name: "component",
    message: "Select a component:",
    choices: await getAvailableComponents(),
  },
])
```

### 3. Add Configuration Options

```typescript
program
  .option("-s, --style <style>", "Component style (default, new-york)")
  .option("-d, --directory <dir>", "Components directory")
```

## Integration with Your Existing Project

The CLI integrates with your existing registry structure:

- Reads from `registry/new-york-v4/ui/`
- Supports your existing component structure
- Maintains your component naming conventions
- Preserves your TypeScript/React patterns

## Next Steps

1. **Customize the CLI** for your specific needs
2. **Add more commands** (list, remove, update)
3. **Implement remote registry** for better distribution
4. **Add dependency auto-installation**
5. **Add component templates and variants**

## Usage Examples

```bash
# Initialize a project
pnpm dlx ui-mechanikos@latest init

# Add a component
pnpm dlx ui-mechanikos@latest add accordion

# Add with options
pnpm dlx ui-mechanikos@latest add button --yes --dry-run

# List available components
pnpm dlx ui-mechanikos@latest list
```

This CLI gives you the same experience as popular tools like `shadcn/ui` but customized for your specific component library!

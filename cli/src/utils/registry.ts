import path from "path"
import { fileURLToPath } from "url"
import fs from "fs-extra"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function getRegistryPath(): Promise<string> {
  // This would typically be a remote registry, but for now we'll use the local one
  // In a real implementation, you'd fetch this from a CDN or API
  return path.join(__dirname, "../../../registry")
}

export async function getAvailableComponents(): Promise<string[]> {
  try {
    const registryPath = await getRegistryPath()

    if (!(await fs.pathExists(registryPath))) {
      // Fallback to hardcoded list if registry doesn't exist
      return getFallbackComponents()
    }

    // Read from the actual registry structure
    const components = []
    const uiDir = path.join(registryPath, "new-york-v4", "ui")

    if (await fs.pathExists(uiDir)) {
      const files = await fs.readdir(uiDir)
      for (const file of files) {
        if (file.endsWith(".tsx")) {
          components.push(file.replace(".tsx", ""))
        }
      }
    }

    return components.length > 0 ? components : getFallbackComponents()
  } catch (error) {
    console.error("Error reading registry:", error)
    return getFallbackComponents()
  }
}

function getFallbackComponents(): string[] {
  return [
    "accordion",
    "alert",
    "alert-dialog",
    "avatar",
    "badge",
    "button",
    "calendar",
    "card",
    "checkbox",
    "collapsible",
    "command",
    "context-menu",
    "dialog",
    "dropdown-menu",
    "form",
    "hover-card",
    "input",
    "label",
    "menubar",
    "navigation-menu",
    "popover",
    "progress",
    "radio-group",
    "scroll-area",
    "select",
    "separator",
    "sheet",
    "skeleton",
    "slider",
    "switch",
    "table",
    "tabs",
    "textarea",
    "toast",
    "toggle",
    "toggle-group",
    "tooltip",
  ]
}

export async function getComponentSource(
  componentName: string
): Promise<string | null> {
  try {
    const registryPath = await getRegistryPath()
    const componentPath = path.join(
      registryPath,
      "new-york-v4",
      "ui",
      `${componentName}.tsx`
    )

    if (await fs.pathExists(componentPath)) {
      return await fs.readFile(componentPath, "utf-8")
    }

    return null
  } catch (error) {
    console.error("Error reading component source:", error)
    return null
  }
}

export async function getComponentDependencies(
  componentName: string
): Promise<string[]> {
  // This would analyze the component source and extract dependencies
  // For now, return common dependencies
  const commonDeps = [
    "react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ]

  // Add specific dependencies based on component
  const specificDeps: Record<string, string[]> = {
    accordion: ["@radix-ui/react-accordion"],
    "alert-dialog": ["@radix-ui/react-alert-dialog"],
    avatar: ["@radix-ui/react-avatar"],
    button: ["@radix-ui/react-slot"],
    dialog: ["@radix-ui/react-dialog"],
    "dropdown-menu": ["@radix-ui/react-dropdown-menu"],
    form: ["react-hook-form", "@hookform/resolvers", "zod"],
    select: ["@radix-ui/react-select"],
    tabs: ["@radix-ui/react-tabs"],
    toast: ["@radix-ui/react-toast"],
  }

  return [...commonDeps, ...(specificDeps[componentName] || [])]
}

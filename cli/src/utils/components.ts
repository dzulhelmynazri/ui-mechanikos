import path from "path"
import fs from "fs-extra"
import glob from "glob"

export async function getAvailableComponents(): Promise<string[]> {
  try {
    // This would typically read from a remote registry or local component list
    // For now, we'll return a hardcoded list based on your registry

    const components = [
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

    return components
  } catch (error) {
    console.error("Error getting available components:", error)
    return []
  }
}

export async function getComponentFiles(
  componentName: string
): Promise<string[]> {
  try {
    // This would read the actual component files from your registry
    const componentDir = path.join(process.cwd(), "registry", componentName)

    if (!(await fs.pathExists(componentDir))) {
      return []
    }

    const files = await glob("**/*", {
      cwd: componentDir,
      nodir: true,
      ignore: ["node_modules/**", ".git/**", "*.log"],
    })

    return files
  } catch (error) {
    console.error("Error getting component files:", error)
    return []
  }
}

export async function validateComponent(
  componentName: string
): Promise<boolean> {
  const availableComponents = await getAvailableComponents()
  return availableComponents.includes(componentName)
}

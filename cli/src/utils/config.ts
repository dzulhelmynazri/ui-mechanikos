import path from "path"
import fs from "fs-extra"

interface ProjectConfig {
  componentsDir: string
  style: string
  typescript: boolean
  tailwind: boolean
}

export async function getProjectConfig(): Promise<ProjectConfig | null> {
  try {
    const configPath = path.join(process.cwd(), "ui-mechanikos.json")

    if (!(await fs.pathExists(configPath))) {
      return null
    }

    const config = await fs.readJson(configPath)
    return config
  } catch (error) {
    console.error("Error reading project config:", error)
    return null
  }
}

export async function createProjectConfig(
  config: ProjectConfig
): Promise<void> {
  try {
    const configPath = path.join(process.cwd(), "ui-mechanikos.json")
    await fs.writeJson(configPath, config, { spaces: 2 })
  } catch (error) {
    console.error("Error creating project config:", error)
    throw error
  }
}

export async function updateProjectConfig(
  updates: Partial<ProjectConfig>
): Promise<void> {
  try {
    const config = await getProjectConfig()
    if (!config) {
      throw new Error("Project not initialized")
    }

    const updatedConfig = { ...config, ...updates }
    await createProjectConfig(updatedConfig)
  } catch (error) {
    console.error("Error updating project config:", error)
    throw error
  }
}

export async function validateProjectStructure(): Promise<boolean> {
  try {
    const config = await getProjectConfig()
    if (!config) {
      return false
    }

    // Check if components directory exists
    const componentsDir = path.join(process.cwd(), config.componentsDir)
    return await fs.pathExists(componentsDir)
  } catch (error) {
    console.error("Error validating project structure:", error)
    return false
  }
}

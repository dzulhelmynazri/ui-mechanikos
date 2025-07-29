import { GithubButton } from "@/registry/new-york-v4/ui/github-button"

export default function GithubButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <GithubButton
        targetStars={1501}
        label="Small"
        size="sm"
        repoUrl="https://github.com/dzulhelmynazri/ui-mechanikos"
      />
      <GithubButton
        targetStars={1501}
        label="Medium"
        repoUrl="https://github.com/dzulhelmynazri/ui-mechanikos"
      />
      <GithubButton
        targetStars={1501}
        label="Large"
        size="lg"
        repoUrl="https://github.com/dzulhelmynazri/ui-mechanikos"
      />
    </div>
  )
}

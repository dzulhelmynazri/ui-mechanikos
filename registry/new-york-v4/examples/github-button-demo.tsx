import { GithubButton } from "@/registry/new-york-v4/ui/github-button"

export default function GithubButtonDemo() {
  return (
    <div className="space-y-4">
      <GithubButton
        targetStars={1501}
        label="Star on GitHub"
        repoUrl="https://github.com/dzulhelmynazri/ui-mechanikos"
      />
    </div>
  )
}

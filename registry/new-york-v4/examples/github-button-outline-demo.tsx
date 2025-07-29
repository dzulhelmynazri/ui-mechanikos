import { GithubButton } from "@/registry/new-york-v4/ui/github-button"

export default function GithubButtonOutlineDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <GithubButton
        initialStars={8889}
        targetStars={80890}
        label="Github Stars"
        roundStars={true}
        repoUrl="https://github.com/dzulhelmynazri/ui-mechanikos"
        variant="outline"
      />
    </div>
  )
}

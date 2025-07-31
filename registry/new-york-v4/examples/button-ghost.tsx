import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonGhost() {
  return (
    <div className="flex items-center gap-2.5">
      <Button variant="ghost">Default</Button>
      <Button variant="primary" appearance="ghost">
        Primary
      </Button>
      <Button variant="destructive" appearance="ghost">
        Destructive
      </Button>
    </div>
  )
}

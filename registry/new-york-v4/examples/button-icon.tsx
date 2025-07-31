import { Mail, Settings, User, X } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonIcon() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="primary" mode="icon">
        <User />
      </Button>
      <Button variant="outline" mode="icon">
        <Mail />
      </Button>
      <Button variant="ghost" mode="icon">
        <Settings />
      </Button>
      <Button variant="dim" mode="icon">
        <X />
      </Button>
    </div>
  )
}

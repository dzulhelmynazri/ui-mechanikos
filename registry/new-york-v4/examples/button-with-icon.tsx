import { Bell, CalendarCheck, Trash2 } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="primary">
        <Trash2 /> Primary
      </Button>
      <Button variant="outline">
        <Bell /> Outline
      </Button>
      <Button variant="ghost">
        <CalendarCheck /> Ghost
      </Button>
    </div>
  )
}

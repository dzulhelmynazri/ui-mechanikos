import { CalendarCheck } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonCircle() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" shape="circle">
        Circle button
      </Button>
      <Button variant="outline" shape="circle" mode="icon">
        <CalendarCheck />
      </Button>
    </div>
  )
}

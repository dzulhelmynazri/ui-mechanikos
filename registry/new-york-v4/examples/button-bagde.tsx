import { Bell, CircleCheckBig, MailCheck } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonBagde() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Button variant="outline" mode="icon" className="relative">
        <Bell />
        <span className="border-background absolute -end-1 -top-1 size-3 animate-bounce rounded-full border-2 bg-blue-500" />
      </Button>

      <Button variant="outline" mode="icon" className="relative">
        <MailCheck />
        <Badge
          variant="info"
          shape="circle"
          size="sm"
          className="absolute start-full top-0 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2"
        >
          5
        </Badge>
      </Button>

      <Button variant="outline" className="relative">
        <MailCheck />
        Messages
        <Badge
          variant="destructive"
          shape="circle"
          size="sm"
          className="absolute start-full top-0 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2"
        >
          5
        </Badge>
      </Button>

      <Button variant="outline">
        <CircleCheckBig />
        Notifications
        <Badge variant="info" shape="circle" size="sm">
          10+
        </Badge>
      </Button>
    </div>
  )
}

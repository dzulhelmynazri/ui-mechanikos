import { User } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/new-york-v4/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex gap-6">
      <Avatar>
        <AvatarFallback>DZ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="text-destructive bg-destructive/10">
          IZ
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="text-primary bg-primary/10">
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

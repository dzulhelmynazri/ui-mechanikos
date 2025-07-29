import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from "@/registry/new-york-v4/ui/avatar"
import { Badge } from "@/registry/new-york-v4/ui/badge"

export default function AvatarBagdeDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Avatar>
        <AvatarImage
          className="rounded-lg"
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
        <AvatarIndicator className="-end-2 -top-2">
          <Badge size="xs" shape="circle" className="border-background border">
            6
          </Badge>
        </AvatarIndicator>
      </Avatar>

      <Avatar>
        <AvatarImage
          className="rounded-lg"
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-2 -bottom-2">
          <Badge
            variant="destructive"
            size="xs"
            shape="circle"
            className="border-background border"
          >
            3
          </Badge>
        </AvatarIndicator>
      </Avatar>
    </div>
  )
}

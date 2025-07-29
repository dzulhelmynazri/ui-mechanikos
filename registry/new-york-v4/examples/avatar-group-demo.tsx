import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-2">
      <Avatar>
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
          className="border-background border-2 hover:z-10"
        />
        <AvatarFallback>DZ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
          className="border-background border-2 hover:z-10"
        />
        <AvatarFallback>IZ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
          className="border-background border-2 hover:z-10"
        />
        <AvatarFallback>IZ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
          className="border-background border-2 hover:z-10"
        />
        <AvatarFallback>IZ</AvatarFallback>
      </Avatar>
      <Button
        variant="secondary"
        size="icon"
        shape="circle"
        className="border-background relative size-10 border-2 hover:z-10"
      >
        +7
      </Button>
    </div>
  )
}

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarStatusDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Avatar>
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -top-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -top-1.5">
          <AvatarStatus variant="offline" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="busy" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="away" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
    </div>
  )
}

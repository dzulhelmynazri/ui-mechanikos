import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar className="size-6">
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
        <AvatarIndicator className="-end-2 -top-2">
          <AvatarStatus variant="online" className="size-2" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
        <AvatarIndicator className="-end-2 -top-2">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-2 -top-2">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-14">
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-1 -top-1">
          <AvatarStatus variant="online" className="size-3" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-20">
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>IZ</AvatarFallback>
        <AvatarIndicator className="-end-px -top-px">
          <AvatarStatus variant="online" className="size-3" />
        </AvatarIndicator>
      </Avatar>
    </div>
  )
}

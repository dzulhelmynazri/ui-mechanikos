import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage
          src="https://github.com/dzulhelmynazri.png"
          alt="@dzulhelmynazri"
        />
        <AvatarFallback>DZ</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/izueibrahim.png"
          alt="@izueibrahim"
        />
        <AvatarFallback>DZ</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:grayscale">
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
            src="https://github.com/mrnonchalantz.png"
            alt="@mrnonchalantz"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/izueibrahim.png"
            alt="@izueibrahim"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>IZ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

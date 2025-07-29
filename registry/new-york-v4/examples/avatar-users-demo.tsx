import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

export default function AvatarUsersDemo() {
  return (
    <div className="border-border flex items-center gap-1.5 rounded-full border p-0.5 shadow-sm shadow-black/5">
      <div className="flex -space-x-1">
        <Avatar className="size-7">
          <AvatarImage
            src="https://github.com/dzulhelmynazri.png"
            alt="@dzulhelmynazri"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>DZ</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage
            src="https://github.com/izueibrahim.png"
            alt="@izueibrahim"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>IZ</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage
            src="https://github.com/izueibrahim.png"
            alt="@izueibrahim"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>IZ</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage
            src="https://github.com/izueibrahim.png"
            alt="@izueibrahim"
            className="border-background border-2 hover:z-10"
          />
          <AvatarFallback>IZ</AvatarFallback>
        </Avatar>
      </div>

      <p className="text-muted-foreground me-1.5 text-xs">
        Trusted by <span className="text-foreground font-semibold">100K+</span>{" "}
        users.
      </p>
    </div>
  )
}

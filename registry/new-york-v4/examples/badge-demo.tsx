import { Activity, X } from "lucide-react"
import { Badge, BadgeButton, BadgeDot } from "@/registry/new-york-v4/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Primary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success" appearance="outline">
              <BadgeDot /> Outline
        </Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge variant="primary" appearance="light">
              <Activity /> light
        </Badge>
        <Badge variant="secondary">
              Solid
              <BadgeButton>
                <X />
              </BadgeButton>
        </Badge>
        <Badge variant="info" appearance="outline" shape="circle">
          5
        </Badge>
        <Badge variant="outline" appearance="outline" shape="circle">
          50+
        </Badge>
        <Badge variant="primary" disabled>
          Solid
        </Badge>
      </div>
  </div>
  )
}

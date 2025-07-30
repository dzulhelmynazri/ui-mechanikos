import { Bell, TriangleAlert } from "lucide-react"

import { Alert, AlertIcon, AlertTitle } from "@/registry/new-york-v4/ui/alert"

export default function AlertOutlineDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:max-w-[75%]">
      <Alert appearance="outline" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a default alert</AlertTitle>
      </Alert>

      <Alert variant="success" appearance="outline" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a success alert</AlertTitle>
      </Alert>

      <Alert variant="destructive" appearance="outline" close={true}>
        <AlertIcon>
          <TriangleAlert />
        </AlertIcon>
        <AlertTitle>This is a destructive alert</AlertTitle>
      </Alert>

      <Alert variant="info" appearance="outline" close={true}>
        <AlertIcon>
          <TriangleAlert />
        </AlertIcon>
        <AlertTitle>This is an info alert</AlertTitle>
      </Alert>
    </div>
  )
}

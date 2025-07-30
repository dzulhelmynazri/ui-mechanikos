import { Bell } from "lucide-react"

import { Alert, AlertIcon, AlertTitle } from "@/registry/new-york-v4/ui/alert"

export default function AlertSizesDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:max-w-[75%]">
      <Alert variant="primary" appearance="outline" size="sm" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a small size alert</AlertTitle>
      </Alert>
      <Alert variant="primary" appearance="outline" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a medium size alert</AlertTitle>
      </Alert>
      <Alert variant="primary" appearance="outline" size="lg" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a large size alert</AlertTitle>
      </Alert>
    </div>
  )
}

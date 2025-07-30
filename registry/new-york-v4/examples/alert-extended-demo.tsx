import { Bell } from "lucide-react"

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/registry/new-york-v4/ui/alert"

export default function AlertExtendedDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:max-w-[75%]">
      <Alert variant="info" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            Insert the alert description here. It would look better as two lines
            of text.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="destructive" appearance="light" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            Insert the alert description here. It would look better as two lines
            of text.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}

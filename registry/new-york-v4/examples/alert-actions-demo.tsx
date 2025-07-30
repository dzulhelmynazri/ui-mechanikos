import { Bell } from "lucide-react"

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/registry/new-york-v4/ui/alert"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function AlertActionsDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:max-w-[75%]">
      <Alert variant="warning" close={false}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            <p>
              Insert the alert description here. This is an example of a
              two-line message for better visual clarity.
            </p>
            <div className="space-x-3.5">
              <Button
                variant="inverse"
                mode="link"
                underlined="solid"
                size="md"
              >
                Upgrade
              </Button>
              <Button variant="inverse" mode="link" underline="solid" size="md">
                Dismiss
              </Button>
            </div>
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="destructive" appearance="light" close={false}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Example Alert Title</AlertTitle>
          <AlertDescription>
            <p>
              Insert the alert description here. This is an example of a
              two-line message for better visual clarity.
            </p>
            <div className="space-x-3.5">
              <Button
                variant="foreground"
                mode="link"
                underlined="solid"
                size="md"
              >
                Upgrade
              </Button>
              <Button
                variant="foreground"
                mode="link"
                underline="solid"
                size="md"
              >
                Dismiss
              </Button>
            </div>
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}

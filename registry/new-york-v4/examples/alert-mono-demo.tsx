import { Bell, TriangleAlert } from "lucide-react"

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertToolbar,
} from "@/registry/new-york-v4/ui/alert"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function AlertMonoDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:max-w-[75%]">
      <Alert variant="primary" icon="primary" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a primary alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="mt-0.5 flex"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>

      <Alert variant="mono" icon="success" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a success alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="mt-0.5 flex"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>

      <Alert variant="mono" icon="destructive" close={true}>
        <AlertIcon>
          <Bell />
        </AlertIcon>
        <AlertTitle>This is a destructive alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="mt-0.5 flex"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>

      <Alert variant="mono" icon="info" close={true}>
        <AlertIcon>
          <TriangleAlert />
        </AlertIcon>
        <AlertTitle>This is an info alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="mt-0.5 flex"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>

      <Alert variant="mono" icon="warning" close={true}>
        <AlertIcon>
          <TriangleAlert />
        </AlertIcon>
        <AlertTitle>This is a warning alert</AlertTitle>
        <AlertToolbar>
          <Button
            variant="inverse"
            mode="link"
            underlined="solid"
            size="sm"
            className="mt-0.5 flex"
          >
            Upgrade
          </Button>
        </AlertToolbar>
      </Alert>
    </div>
  )
}

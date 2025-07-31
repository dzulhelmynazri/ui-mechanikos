import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonLink() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Button mode="link" underline="solid" asChild>
        <Link href="#">Solid</Link>
      </Button>
      <Button mode="link" underline="dashed">
        <Link href="#">Dashed</Link>
      </Button>
      <Button mode="link" underlined="solid">
        <Link href="#">Underlined - Solid</Link>
      </Button>
      <Button mode="link" underlined="dashed">
        <Link href="#">Underlined - Dashed</Link>
      </Button>
    </div>
  )
}

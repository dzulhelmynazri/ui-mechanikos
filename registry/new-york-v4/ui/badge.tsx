import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
      size: {
        lg: "rounded-md px-[0.5rem] h-7 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5",
        md: "rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&_svg]:size-3.5 ",
        sm: "rounded-sm px-[0.325rem] h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3",
        xs: "rounded-sm px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&_svg]:size-3",
      },
      shape: {
        default: "",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, shape }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

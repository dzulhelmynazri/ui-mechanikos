import * as React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends React.ComponentProps<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
  /**
   * If true, automatically repeats children enough to fill the visible area
   */
  autoFill?: boolean
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string
  /**
   * ARIA live region politeness
   */
  ariaLive?: "off" | "polite" | "assertive"
  /**
   * ARIA role
   */
  ariaRole?: string
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      reverse = false,
      pauseOnHover = false,
      children,
      vertical = false,
      repeat = 4,
      ariaLabel,
      ariaLive = "off",
      ariaRole = "marquee",
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        data-slot="marquee"
        className={cn(
          "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
        aria-label={ariaLabel}
        aria-live={ariaLive}
        role={ariaRole}
        tabIndex={0}
      >
        {React.useMemo(
          () => (
            <>
              {Array.from({ length: repeat }, (_, i) => (
                <div
                  key={i}
                  className={cn(
                    !vertical
                      ? "flex-row [gap:var(--gap)]"
                      : "flex-col [gap:var(--gap)]",
                    "flex shrink-0 justify-around",
                    !vertical && "animate-marquee flex-row",
                    vertical && "animate-marquee-vertical flex-col",
                    pauseOnHover && "group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                  )}
                >
                  {children}
                </div>
              ))}
            </>
          ),
          [repeat, children, vertical, pauseOnHover, reverse]
        )}
      </div>
    )
  }
)
Marquee.displayName = "Marquee"

export { Marquee }

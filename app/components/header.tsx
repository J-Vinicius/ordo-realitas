import type { ReactNode } from "react"

import type { ClassNameValue } from "tailwind-merge"

import { cn } from "~/lib/utils"
import { useScrollDirection } from "~/hooks/use-scroll-direction"

interface HeaderProps {
  children: ReactNode
  className?: ClassNameValue
}

export function Header({ children, className }: HeaderProps) {
  const isVisible = useScrollDirection()

  return (
    <header
      className={cn(
        `sticky top-0 z-50 flex items-center justify-between gap-2 bg-background/80 p-2 backdrop-blur-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`,
        className
      )}
    >
      {children}
    </header>
  )
}

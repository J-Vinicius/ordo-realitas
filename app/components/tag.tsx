import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "~/lib/utils"

const tagVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.6rem] font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        sangue: "bg-red-600 text-secondary-foreground [a&]:hover:bg-red-600/90",
        conhecimento:
          "bg-yellow-600 text-secondary-foreground [a&]:hover:bg-yellow-600/90",
        energia:
          "bg-purple-600 text-secondary-foreground [a&]:hover:bg-purple-600/90",
        medo: "bg-white text-secondary-foreground [a&]:hover:bg-white/90",
        morte:
          "border-muted bg-black text-secondary-foreground [a&]:hover:bg-black/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Tag({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof tagVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="tag"
      data-variant={variant}
      className={cn(tagVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Tag, tagVariants }

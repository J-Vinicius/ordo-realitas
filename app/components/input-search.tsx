import * as React from "react"
import { Search } from "lucide-react"

import { Input } from "~/components/ui/input"

type InputSearchProps = React.ComponentProps<"input">

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative h-9 flex-1 bg-background">
        <Search
          className="absolute top-2 left-2 z-10 text-muted-foreground"
          size={20}
        />

        <Input
          ref={ref}
          className={`h-full pr-16 pl-9 ${className ?? ""}`}
          placeholder="Search"
          {...props}
        />
      </div>
    )
  }
)

InputSearch.displayName = "InputSearch"

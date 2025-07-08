import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-gray-800/60 animate-pulse rounded-md border border-gray-700/30", className)}
      {...props}
    />
  )
}

export { Skeleton }

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-neutral-200 bg-white p-6",
          hover && "transition-all hover:shadow-lg hover:border-primary-200",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;
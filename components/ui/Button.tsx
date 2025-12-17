import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const Comp = asChild ? 'div' : 'button';
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary-600 text-white hover:bg-primary-700 shadow-sm': variant === 'primary',
            'bg-neutral-100 text-neutral-900 hover:bg-neutral-200': variant === 'secondary',
            'border-2 border-primary-600 text-primary-600 hover:bg-primary-50': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
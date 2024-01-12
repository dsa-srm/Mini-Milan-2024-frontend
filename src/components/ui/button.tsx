import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  transition-colors   disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				custom:"px-[2rem] uppercase py-3 text-3xl font-extrabold text-[white] drop-shadow-xl rounded-[0.5rem] mx-[1rem] font-[montserrat] underline-offset-4 hover:underline  ",
				custom2:"px-[2rem] uppercase py-3 text-3xl font-extrabold text-[white] drop-shadow-xl rounded-[0.7rem] mx-[1rem] font-[montserrat] underline-offset-4 mr-[1.5rem] bg-[#130025] ring-4  ring-[#ff7f4b] hover:ring-offset-4 ring-offset-[#c13d48] transition-all duration-300  ",
				icon: "bg-transparent hover:bg-accent/10",
				close:"bg-zinc-700 text-white font-[montserrat] text-[1.3rem] px-[20px]  "
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				custom:"h-fit w-fit",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };

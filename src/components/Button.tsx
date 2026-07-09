import type {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export function Button({children, className = "", ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={`flex items-center gap-2 justify-between border-2 border-claude-border dark:border-claude-border-dark hover:bg-claude-bg hover:dark:bg-claude-bg-dark cursor-pointer active:scale-95 duration-200 ${className}`}
        >
            {children}
        </button>
    );
}
import type {MouseEvent} from "react";
import {triggerConfetti} from "../utils/confetti";
import {playDing} from "../utils/sound";

interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
    label: string;
}

export function Checkbox({checked, onChange, label}: CheckboxProps) {

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        if (!checked) {
            triggerConfetti(e.clientX, e.clientY);
            playDing();
        }
        onChange();
    }

    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            aria-label={label}
            onClick={handleClick}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                  shrink-0 transition-all duration-300 cursor-pointer
                  ${checked
                ? "bg-blue-500 dark:bg-blue-600 border-blue-500 dark:border-blue-600 scale-110"
                : "bg-transparent border-gray-300 dark:border-gray-600 hover:border-blue-400"
            }`}
        >
            {checked && (
                <svg
                    className="w-3 h-3 text-white animate-scale-in"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
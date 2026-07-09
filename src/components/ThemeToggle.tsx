import {useTheme} from "../hooks/useTheme";
import {Button} from "./Button.tsx";

type ThemeOption = {
    value: "light" | "dark" | "system";
    label: string;
    icon: string;
};

const OPTIONS: ThemeOption[] = [
    {value: "light", label: "Light", icon: "☀"},
    {value: "dark", label: "Dark", icon: "🌙"},
    {value: "system", label: "System", icon: "🖥"},
];

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <div className="flex gap-2" aria-label="Theme">
            {OPTIONS.map((option) => (
                <Button
                    key={option.value}
                    className="rounded-full p-2"
                    onClick={() => setTheme(option.value)}
                    aria-pressed={theme === option.value}
                    aria-label={option.label}
                    type="button">
                    <span aria-hidden="true">{option.icon}</span>
                </Button>
            ))}
        </div>
    );
}
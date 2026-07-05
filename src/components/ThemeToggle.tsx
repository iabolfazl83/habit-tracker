import {useTheme} from "../hooks/useTheme";

type ThemeOption = {
    value: "light" | "dark" | "system";
    label: string;
    icon: string;
};

const OPTIONS: ThemeOption[] = [
    {value: "light", label: "Light", icon: "☀"},
    {value: "dark", label: "Dark", icon: "⬛"},
    {value: "system", label: "System", icon: "◑"},
];

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <div className="theme-toggle" role="group" aria-label="Theme">
            {OPTIONS.map((option) => (
                <button
                    key={option.value}
                    className={`theme-btn ${theme === option.value ? "active" : ""}`}
                    onClick={() => setTheme(option.value)}
                    aria-pressed={theme === option.value}
                    aria-label={option.label}
                    type="button"
                >
                    <span aria-hidden="true">{option.icon}</span>
                    <span>{option.label}</span>
                </button>
            ))}
        </div>
    );
}
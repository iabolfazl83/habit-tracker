import {useTheme} from "../hooks/useTheme";

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
                <button
                    key={option.value}
                    className={`p-1 flex justify-center items-center h-10 w-10 border-2 rounded-full border-claude-border dark:border-claude-border-dark bg-claude-input dark:bg-claude-input-dark hover:dark:bg-claude-bg-dark hover:bg-claude-border dark:text-claude-text-dark hover:cursor-pointer duration-200 ${theme === option.value ? "" : ""}`}
                    onClick={() => setTheme(option.value)}
                    aria-pressed={theme === option.value}
                    aria-label={option.label}
                    type="button"
                >
                    <span aria-hidden="true">{option.icon}</span>
                </button>
            ))}
        </div>
    );
}
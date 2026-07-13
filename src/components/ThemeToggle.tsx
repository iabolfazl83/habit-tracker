import {useTheme} from "../hooks/useTheme";
import {Button} from "./Button.tsx";
import {IconDeviceImac, IconMoon, IconSun} from "@tabler/icons-react";
import type {ReactNode} from "react";

type ThemeOption = {
    value: "light" | "dark" | "system";
    label: string;
    icon: ReactNode;
};

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    const toggleIcon = theme === "light"
        ? <IconSun stroke={2}/>
        : <IconMoon stroke={2}/>;

    const toggleValue = theme === "light" ? "dark" : "light";
    const toggleLabel = theme === "light" ? "Switch to dark" : "Switch to light";

    const systemOption: ThemeOption = {
        value: "system",
        label: "Use system default",
        icon: <IconDeviceImac stroke={2}/>,
    };

    const iconClass = "text-claude-text dark:text-claude-text-dark";
    return (
        <div className="flex gap-2" aria-label="Theme">
            <Button
                className={`rounded-full p-2 ${iconClass} ${theme === "system" ? "opacity-40" : "opacity-100"}`}
                onClick={() => setTheme(toggleValue)}
                aria-label={toggleLabel}
                type="button"
            >
                <span aria-hidden="true">{toggleIcon}</span>
            </Button>
            <Button
                className={`rounded-full p-2 ${iconClass} ${theme === "system" ? "opacity-100" : "opacity-40"}`}
                onClick={() => setTheme(systemOption.value)}
                aria-pressed={theme === "system"}
                aria-label={systemOption.label}
                type="button"
            >
                <span aria-hidden="true">{systemOption.icon}</span>
            </Button>
        </div>
    );
}
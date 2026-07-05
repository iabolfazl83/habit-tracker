import {useState, useEffect} from "react";

export type Theme = "light" | "dark" | "system";

function getSystemPreference(): "light" | "dark" {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(theme: Theme): void {
    const resolved = theme === "system" ? getSystemPreference() : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) ?? "system";
    });

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem("theme", theme);

        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => applyTheme("system");
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    return {theme, setTheme};
}
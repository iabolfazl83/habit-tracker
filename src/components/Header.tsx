import {ThemeToggle} from "./ThemeToggle.tsx";

export function Header() {
    return (
        <header className="w-full">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h1 className="text-claude-text dark:text-[#c3c2b7] font-bold text-2xl">Habits</h1>
                    <p className="text-claude-mute-text">Track what matters, every day.</p>
                </div>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}
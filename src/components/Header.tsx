import {ThemeToggle} from "./ThemeToggle.tsx";

export function Header() {
    return (
        <header>
            <div>
                <div>
                    <h1>Habits</h1>
                    <p>Track what matters, every day.</p>
                </div>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}
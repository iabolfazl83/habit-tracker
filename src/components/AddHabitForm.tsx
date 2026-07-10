import {type ChangeEvent, type SubmitEvent, useRef, useState} from "react";
import {Button} from "./Button.tsx";

interface AddHabitFormProps {
    onAddHabit: (name: string) => void
}

export function AddHabitForm({onAddHabit}: AddHabitFormProps) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const input = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedName = name.trim();
        if (trimmedName.length < 1) {
            setError("Please enter a valid value");
            input.current?.focus();
            return;
        }

        onAddHabit(trimmedName);
        setName("");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full flex mt-8 mb-2 items-center gap-2 justify-between text-center bg-claude-input
              dark:bg-claude-input-dark p-2 px-4 text-claude-text dark:text-claude-text-dark rounded-2xl border
               border-claude-border dark:border-claude-border-dark">
                <input
                    ref={input}
                    className="focus:outline-0 w-full wrap-break-word"
                    type="text" placeholder="Add New Habit..." value={name}
                    onChange={handleChange}
                />
                <Button className="py-2 px-4 rounded-xl">
                    <span>+</span>
                    <span>Add</span>
                </Button>
            </div>
            <div>
                <p className="text-red-400">
                    {error}
                </p>
            </div>
        </form>
    )
}
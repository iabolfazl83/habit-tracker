import {type ChangeEvent, type SubmitEvent, useState} from "react";

interface AddHabitFormProps {
    onAddHabit: (name: string) => void
}

export function AddHabitForm({onAddHabit}: AddHabitFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedName = name.trim();
        if (trimmedName.length < 1) {
            alert("Please enter a valid name");
            return;
        }

        onAddHabit(trimmedName);
        setName("");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" placeholder="Add New Habit..." value={name}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
}
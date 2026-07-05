import type {Habit} from "../types/habits.ts";
import {HabitItem} from "./HabitItem.tsx";

interface HabitListProps {
    habits: Habit[];
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

export function HabitList({habits, onComplete, onDelete}: HabitListProps) {
    if (habits.length === 0) {
        return <p className="">No habits yet. Add one above.</p>;
    }

    return (
        <ul>
            {habits.map((habit) => (
                <HabitItem key={habit.id} habit={habit} onComplete={onComplete} onDelete={onDelete}/>
            ))}
        </ul>
    );
}
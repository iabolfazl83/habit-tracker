import type {Habit} from "../types/habits.ts";

interface HabitItemProps {
    habit: Habit;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}


export function HabitItem({habit, onComplete, onDelete}: HabitItemProps) {
    const today = new Date().toISOString().split("T")[0];
    const isCompletedToday = habit.completedDates.includes(today);

    return (
        <li>
            <input type="checkbox" onChange={() => onComplete(habit.id)} checked={isCompletedToday}/>
            {isCompletedToday ? <s>{habit.name}</s> : <span>{habit.name}</span>}
            <button type="button" onClick={() => onDelete(habit.id)}>Delete</button>
        </li>
    )
}
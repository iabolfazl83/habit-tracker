import type {Habit} from "../types/habits.ts";
import {Checkbox} from "./Checkbox.tsx";
import {IconTrash} from "@tabler/icons-react";

interface HabitItemProps {
    habit: Habit;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}


export function HabitItem({habit, onComplete, onDelete}: HabitItemProps) {
    const today = new Date().toISOString().split("T")[0];
    const isCompletedToday = habit.completedDates.includes(today);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return (
        <li className={`${isCompletedToday ? "opacity-50" : ""} flex justify-between items-center group px-6 py-4 my-2 bg-claude-input border-claude-border hover:border-stone-400 dark:bg-claude-input-dark rounded-xl border dark:border-claude-border-dark hover:dark:border-stone-600 text-claude-text dark:text-claude-text-dark duration-200`}>
            <div className="flex gap-4 items-center">
                <Checkbox
                    checked={isCompletedToday}
                    onChange={() => onComplete(habit.id)}
                    label={`Mark ${habit.name} as ${isCompletedToday ? "incomplete" : "complete"}`}
                />
                {isCompletedToday ? <s>{habit.name}</s> : <span>{habit.name}</span>}
            </div>
            <div>
                <button
                    className={`${isMobile ? "opacity-100" : ""} opacity-0 group-hover:opacity-100 duration-200 hover:cursor-pointer`}
                    type="button"
                    onClick={() => onDelete(habit.id)}>
                    <div
                        className="text-red-700 hover:bg-red-700 active:bg-red-700 dark:text-red-400 active:dark:bg-red-700 active:text-white hover:text-white p-1 rounded-md duration-200">
                        <IconTrash stroke={1}/>
                    </div>
                </button>
            </div>
        </li>
    )
}
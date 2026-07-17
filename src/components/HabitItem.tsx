import type {Habit} from "../types/habits.ts";
import {Checkbox} from "./Checkbox.tsx";
import {IconPencil, IconTrash} from "@tabler/icons-react";
import {type ChangeEvent, type MouseEvent, type SubmitEvent, useRef, useState} from "react";
import {playDing} from "../utils/sound.ts";
import {triggerConfetti} from "../utils/confetti.ts";

interface HabitItemProps {
    habit: Habit;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, name: string) => void;
}


export function HabitItem({habit, onComplete, onDelete, onEdit}: HabitItemProps) {
    const today = new Date().toISOString().split("T")[0];
    const isCompletedToday = habit.completedDates.includes(today);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const [habitName, setHabitName] = useState(habit.name);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState(false);

    const handleEditClick = () => {
        if (!isEditing) {
            setIsEditing(true);
            inputRef.current?.focus();
        } else {
            handleSubmit()
        }
    };

    const handleHabitChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHabitName(e.target.value);
        setError(false);
    }

    const handleSubmit = (event?: SubmitEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const trimmedName = habitName.trim();
        if (trimmedName.length < 1) {
            setError(true);
            inputRef.current?.focus();
            return;
        }

        onEdit(habit.id, trimmedName);
        setIsEditing(false);
        setError(false);
        inputRef.current?.blur();
    };

    const handleComplete = (e: MouseEvent<HTMLButtonElement>) => {
        if (!isCompletedToday) {
            triggerConfetti(e.clientX, e.clientY);
            playDing();
        }

        onComplete(habit.id);
    };

    return (
        <li className={`${isCompletedToday ? "opacity-50" : ""} flex gap-2 justify-between items-center group px-6 py-4 my-2 bg-claude-input border-claude-border hover:border-stone-400 dark:bg-claude-input-dark rounded-2xl border dark:border-claude-border-dark hover:dark:border-stone-600 text-claude-text dark:text-claude-text-dark duration-200`}>
            <div className="flex gap-4 items-center flex-1">
                {!isEditing && (
                    <Checkbox
                        checked={isCompletedToday}
                        onChange={handleComplete}
                        label={`Mark ${habit.name} as ${isCompletedToday ? "incomplete" : "complete"}`}
                    />
                )}
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text"
                           className={`w-full ${isCompletedToday ? "line-through" : ""} ${isEditing ? "border-claude-border dark:border-claude-border-dark focus:border-stone-400 focus:dark:border-stone-500" : "border-transparent"} ${error ? "border-red-400!" : ""} border outline-0 rounded-xl p-2 duration-200`}
                           ref={inputRef} value={habitName} onChange={handleHabitChange} disabled={!isEditing}/>
                </form>
            </div>
            <div>
                {!isEditing && (
                    <button
                        className={`${isMobile ? "opacity-100" : ""} opacity-0 group-hover:opacity-100 duration-200 hover:cursor-pointer`}
                        type="button"
                        onClick={() => onDelete(habit.id)}>
                        <div
                            className="text-red-700 hover:bg-red-700 active:bg-red-700 dark:text-red-400 active:dark:bg-red-700 active:text-white hover:text-white p-1 rounded-md duration-200">
                            <IconTrash stroke={1}/>
                        </div>
                    </button>
                )}
                <button onClick={handleEditClick}
                        className={`${isMobile ? "opacity-100" : ""} opacity-0 group-hover:opacity-100 duration-200 hover:cursor-pointer`}>
                    <div
                        className="text-claude-text cursor-pointer dark:text-claude-text-dark p-1 rounded-md duration-200">
                        <IconPencil stroke={1}/>
                    </div>
                </button>
            </div>
        </li>
    )
}
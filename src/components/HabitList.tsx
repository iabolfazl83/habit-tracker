import type {Habit} from "../types/habits.ts";
import {HabitItem} from "./HabitItem.tsx";
import {EmptyState} from "./EmptyState.tsx";

interface HabitListProps {
    habits: Habit[];
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, name: string) => void;
}

export function HabitList({habits, onComplete, onDelete, onEdit}: HabitListProps) {
    if (habits.length === 0) {
        return (<EmptyState/>);
    }

    return (
        <>
            <p className="text-claude-mute-text mt-4 mb-2 text-sm font-bold text-left w-full">TODAY</p>
            <ul className="flex flex-col w-full overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden flex-1 min-h-0 scroll">
                {habits.map((habit) => (
                    <HabitItem key={habit.id} habit={habit} onComplete={onComplete} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </ul>
        </>
    );
}
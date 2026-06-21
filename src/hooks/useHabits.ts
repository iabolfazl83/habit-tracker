import {useLocalStorage} from "./useLocalStorage";
import type {Habit} from "../types/habits";

export function useHabits() {
    const [habits, setHabits] = useLocalStorage<Habit[]>("habits", []);

    const addHabit = (name: string): void => {
        const newHabit: Habit = {
            id: crypto.randomUUID(),
            name,
            createdAt: new Date().toISOString(),
            completedDates: [],
            isArchived: false,
        }
        setHabits(prevHabits => [...prevHabits, newHabit]);
    }

    const completeHabit = (id: string): void => {
        const today = new Date().toISOString().split("T")[0]; // "2026-06-12"

        setHabits(prevHabits => prevHabits.map(habit => {
                if (habit.id !== id) return habit;

                const alreadyDone = habit.completedDates.includes(today);

                return {
                    ...habit,
                    completedDates: alreadyDone
                        ? habit.completedDates.filter(d => d !== today)
                        : [...habit.completedDates, today],
                };
            })
        );
    };

    const deleteHabit = (id: string): void => {
        setHabits(
            prevHabits => prevHabits.map(habit => habit.id !== id ? {...habit, isArchived: true} : habit)
        );
    }

    return {
        habits,
        addHabit,
        completeHabit,
        deleteHabit,
    }
}
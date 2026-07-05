import {AddHabitForm} from "./components/AddHabitForm.tsx";
import {useHabits} from "./hooks/useHabits.ts";
import {HabitList} from "./components/HabitList.tsx";
import {Header} from "./components/Header.tsx";

function App() {
    const {addHabit, activeHabits, completeHabit, deleteHabit} = useHabits();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
            <Header/>
            <AddHabitForm onAddHabit={addHabit}/>
            <HabitList habits={activeHabits} onComplete={completeHabit} onDelete={deleteHabit}/>
        </div>
    )
}

export default App

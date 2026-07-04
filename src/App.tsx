import {AddHabitForm} from "./components/AddHabitForm.tsx";
import {useHabits} from "./hooks/useHabits.ts";
import {HabitList} from "./components/HabitList.tsx";

function App() {
    const {addHabit, activeHabits, completeHabit, deleteHabit} = useHabits();

    return (
        <>
            <AddHabitForm onAddHabit={addHabit}/>
            <HabitList habits={activeHabits} onComplete={completeHabit} onDelete={deleteHabit}/>
        </>
    )
}

export default App

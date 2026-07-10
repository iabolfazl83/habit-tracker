import {AddHabitForm} from "./components/AddHabitForm.tsx";
import {useHabits} from "./hooks/useHabits.ts";
import {HabitList} from "./components/HabitList.tsx";
import {Header} from "./components/Header.tsx";

function App() {
    const {addHabit, activeHabits, completeHabit, deleteHabit} = useHabits();

    return (
        <div className="h-full transition-colors duration-200 bg-claude-bg dark:bg-claude-bg-dark p-4">
            <div className="flex flex-col items-center max-w-md mx-auto w-full h-full">
                <Header/>
                <AddHabitForm onAddHabit={addHabit}/>
                <HabitList
                    habits={activeHabits}
                    onComplete={completeHabit}
                    onDelete={deleteHabit}
                />
            </div>
        </div>
    );
}

export default App;

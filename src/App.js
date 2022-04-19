import Filter from "./components/filter/Filter";
import TodoInput from "./components/ToDoInput";

function App() {
    return (
        <div className="container max-w-xs pt-5">
            <TodoInput />
            <Filter />
        </div>
    );
}

export default App;

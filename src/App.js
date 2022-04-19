import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

function App() {
    return (
        <div className="container max-w-xs pt-5">
            <TodoInput />
            <Filter />
            <PageLimit />
            <TodoList />
            <Pagination />
        </div>
    );
}

export default App;

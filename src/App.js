import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/ToDoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

const initialTodoList = [
    { title: "homework", completed: true, id: uuidv4() },
    { title: "Midterm exam", completed: false, id: uuidv4() },
    { title: "Gaming", completed: false, id: uuidv4() },
];

console.log(initialTodoList);

function App() {
    const [todoList, setTodoList] = useState(initialTodoList);

    const createTodo = (title) => {
        const newTodo = { title, completed: false, id: uuidv4() };
        const oldTodoList = [...todoList];
        oldTodoList.unshift(newTodo);
        setTodoList(oldTodoList);
    };

    return (
        <div className="container max-w-xs pt-5">
            <TodoInput createTodo={createTodo} />
            <Filter />
            <PageLimit />
            <TodoList todoList={todoList} />
            <Pagination />
        </div>
    );
}

export default App;

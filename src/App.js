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
    const [searchStatus, setSearchStatus] = useState(null);

    const createTodo = (title) => {
        const newTodo = { title, completed: false, id: uuidv4() };
        const oldTodoList = [...todoList];
        oldTodoList.unshift(newTodo);
        setTodoList(oldTodoList);
    };

    const removeTodo = (id) => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
            const clone = [...todoList];
            clone.splice(idx, 1);
            setTodoList(clone);
        }
    };

    // newValue: {title,completed}
    const updateTodo = (newvalue, id) => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
            const clone = [...todoList];
            clone[idx] = { ...clone[idx], ...newvalue, id };
            setTodoList(clone);
        }
    };

    const changeSearchStatus = (value) => {
        setSearchStatus(value);
    };

    // const filterOut = (value) => {
    //     if (value === "ALL") {
    //         return todoList;
    //     } else if (value === "COMPLETED") {
    //         return todoList.filter((ele) => ele.completed === true);
    //     } else if (value === "PENDING") {
    //         return todoList.filter((ele) => ele.completed === false);
    //     }
    // };

    // let filteredTodoList = [];

    // switch (searchStatus) {
    //     case "COMPLETED": {
    //         filteredTodoList = todoList.filter((ele) => ele.completed === true);
    //         break;
    //     }
    //     case "PENDING": {
    //         filteredTodoList = todoList.filter(
    //             (ele) => ele.completed === false
    //         );
    //         break;
    //     }
    //     default:
    //         filteredTodoList = [...todoList];
    // }

    const filteredTodoList = todoList.filter(
        (ele) => searchStatus === null || ele.completed === searchStatus
    );

    return (
        <div className="container max-w-xs pt-5">
            <TodoInput createTodo={createTodo} />
            <Filter
                changeSearchStatus={changeSearchStatus}
                searchStatus={searchStatus}
            />
            <PageLimit />
            <TodoList
                todoList={filteredTodoList}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            <Pagination />
        </div>
    );
}

export default App;

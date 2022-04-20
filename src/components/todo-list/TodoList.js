import Todo from "./Todo";

function TodoList(props) {
    return (
        <ul className="list-group shadow mt-4">
            {props.todoList.map((ele) => (
                <Todo
                    title={ele.title}
                    id={ele.id}
                    key={ele.id}
                    completed={ele.completed}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;

import Todo from "./Todo";

function TodoList(props) {
    return (
        <ul className="list-group shadow mt-4">
            {props.todoList.map((ele) => (
                <Todo
                    title={ele.title}
                    completed={ele.completed}
                    key={ele.id}
                />
            ))}
        </ul>
    );
}

export default TodoList;

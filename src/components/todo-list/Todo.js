import { useState } from "react";
import TodoInput from "../ToDoInput";
import Button from "../ui/Button";

function Todo(props) {
    const { title, completed, removeTodo, id, updateTodo } = props;
    const [isEditing, setIsEditing] = useState(false);

    const closeEditing = () => {
        setIsEditing(false);
    };

    return (
        <li
            className={`list-group-item d-flex ${
                isEditing ? "flex-column gap-2" : ""
            } align-items-center p-4 bd-callout bd-callout-${
                completed ? "success" : "warning"
            }`}
        >
            {isEditing ? (
                <TodoInput
                    id={id}
                    title={title}
                    closeEditing={closeEditing}
                    updateTodo={updateTodo}
                />
            ) : (
                <>
                    <span
                        className="flex-grow-1"
                        role="button"
                        onClick={() => setIsEditing(true)}
                    >
                        {title}
                    </span>
                    <div className="btn-group">
                        <Button
                            color="outline-info"
                            onClick={() =>
                                updateTodo({ completed: !completed }, id)
                            }
                        >
                            <i
                                className={`fa-solid fa-toggle-${
                                    completed ? "on" : "off"
                                }`}
                            />
                        </Button>
                        <Button color="danger" onClick={() => removeTodo(id)}>
                            <i className="fa-regular fa-trash-can" />
                        </Button>
                    </div>
                </>
            )}
        </li>
    );
}

export default Todo;

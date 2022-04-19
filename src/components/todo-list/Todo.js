import Button from "../ui/Button";

function Todo(props) {
    const { title, completed } = props;

    return (
        <li
            className={`list-group-item d-flex align-items-center p-4 bd-callout bd-callout-${
                completed ? "success" : "warning"
            }`}
        >
            <span className="flex-grow-1">{title}</span>
            <div className="btn-group">
                <Button color="outline-info">
                    <i
                        className={`fa-solid fa-toggle-${
                            completed ? "on" : "off"
                        }`}
                    />
                </Button>
                <Button color="danger">
                    <i className="fa-regular fa-trash-can" />
                </Button>
            </div>
        </li>
    );
}

export default Todo;

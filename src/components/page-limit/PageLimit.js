function PageLimit() {
    return (
        <div className="d-flex mt-4 gap-4 align-items-center">
            <small className="text-muted">Show:</small>
            <select
                className="form-select form-select-sm-2"
                style={{ width: "5rem" }}
            >
                <option>10</option>
                <option>25</option>
                <option>50</option>
            </select>
        </div>
    );
}

export default PageLimit;

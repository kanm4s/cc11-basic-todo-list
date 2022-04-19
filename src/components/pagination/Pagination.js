import PageList from "./PageList";

function Pagination() {
    return (
        <div className="mt-2 d-flex align-items-center">
            <small className="text-muted flex-grow-1">
                Show 1 to 10 of entries
            </small>
            <PageList />
        </div>
    );
}

export default Pagination;

import FilterSearch from "./Filtersearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
    return (
        <div className="mt-4 gap-4 d-flex">
            <FilterSearch />
            <FilterStatus
                changeSearchStatus={props.changeSearchStatus}
                searchStatus={props.searchStatus}
            />
        </div>
    );
}

export default Filter;

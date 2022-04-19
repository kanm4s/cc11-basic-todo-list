import FilterSearch from "./Filtersearch";
import FilterStatus from "./FilterStatus";

function Filter() {
    return (
        <div className="mt-4 gap-4 d-flex">
            <FilterSearch />
            <FilterStatus />
        </div>
    );
}

export default Filter;

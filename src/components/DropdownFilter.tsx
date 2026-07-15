import {type SortType} from "../hooks/useDropdownFilter";

interface DropdownFilterProps {
    sortType: SortType;
    setSortType: (type: SortType) => void;
    isOpen: boolean;
    toggle: () => void;
    ref: React.RefObject<HTMLDivElement | null>;
}

function DropdownFilter ({sortType, setSortType, isOpen, toggle, ref}:DropdownFilterProps) {

    return (
        <div className="dropdownFilter-wrapper">
            <button className="dropdownFilter-btn"
            onClick={toggle}>Filter: {sortType === 'newest' ? 'New first' : 'Old first'}</button>
            {isOpen && (
                <div className="dropdownFilter"
                ref={ref}>
                    <button className="newFirst-btn"
                    onClick={()=> {
                    setSortType('newest')
                    toggle()
                    }}>New first</button>
                    <button className="oldFirst-btn"
                    onClick={()=> {
                    setSortType('oldest')
                    toggle()
                    }}>Old first</button>
                </div>
            )}
        </div>
    )
}

export default DropdownFilter;
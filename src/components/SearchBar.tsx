interface SearchBarProps {
    searchText: string;
    setSearchText: (text: string) => void;
    createNote: ()=> void;
}

function SearchBar({searchText, setSearchText, createNote}: SearchBarProps) {


    return (
        <div className='nav-bar'>
            <div className='search-section'>
                <input type="text"
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}
                placeholder="Search..."/>
                
                <button className='create-note'
                onClick={createNote}>Create note</button>
            </div>
      </div>
    )
}


export default SearchBar;
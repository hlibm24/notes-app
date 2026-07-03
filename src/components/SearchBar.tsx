interface SearchBarProps {
    setSearchText: (text: string) => void;
    createNote: ()=> void;
}

function SearchBar({setSearchText, createNote}: SearchBarProps) {



    return (
        <div className='nav-bar'>
            <div className='search-section'>
                <input type="text"
                onChange={(e)=> setSearchText(e.target.value)}/>
            </div>
            <div className='tools'>
                <button className='create-note'
                onClick={()=> createNote()}>Create note</button>
            </div>
      </div>
    )
}


export default SearchBar;
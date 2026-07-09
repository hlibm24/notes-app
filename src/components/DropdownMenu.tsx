
interface DropdownMenuProps {
  deleteNote: (id: number) => void;
  toggleFavorite: (id: number) => void;
  setEditedId: (id: number | null) => void;
  noteId: number;
  favorite: boolean;
  openDropdownId: number | null;
  toggleDropdown: (id: number) => void;
}

function DropdownMenu({deleteNote, toggleFavorite, setEditedId, noteId, favorite, openDropdownId, toggleDropdown}: DropdownMenuProps) {
  
  const isOpen = openDropdownId === noteId;

  return (
    <>
      <button className="dropdown-trigger"
      onClick={(e) => {e.stopPropagation(); toggleDropdown(noteId)}}>⋮</button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="delete-note"
          onClick={(e) => {deleteNote(noteId); e.stopPropagation()}}>X</button>
          <button className="update-title"
          onClick={(e) => {setEditedId(noteId); e.stopPropagation()}}>Update title</button>
          <button className="addToFav"
          onClick={(e) => {toggleFavorite(noteId); e.stopPropagation()}}>
            {favorite ? 'Delete from favorites' : 'Add to favorites'}
          </button>
        </div>
      )}
    </>
  )
}

export default DropdownMenu;
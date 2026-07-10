import type { OpenDropdown } from "../hooks/useDropdown";

interface DropdownMenuProps {
  deleteNote: (id: number) => void;
  toggleFavorite: (id: number) => void;
  setEditedId: (id: number | null) => void;
  noteId: number;
  favorite: boolean;
  openDropdown: OpenDropdown;
  toggleDropdown: (id: number, sourse: 'notes' | 'favorites') => void;
  sourse: 'notes' | 'favorites'
}

function DropdownMenu({deleteNote, toggleFavorite, setEditedId, noteId, favorite, openDropdown, toggleDropdown, sourse}: DropdownMenuProps) {
  
  const isOpen = openDropdown?.id === noteId && openDropdown?.sourse === sourse;

  return (
    <>
      <button className="dropdown-trigger"
      onClick={(e) => {e.stopPropagation(); toggleDropdown(noteId, sourse)}}>⋮</button>
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
import type { OpenDropdown } from "../hooks/useDropdown";

interface DropdownMenuProps {
  deleteNote: (id: number) => void;
  toggleFavorite: (id: number) => void;
  setEditedId: (id: number | null) => void;
  noteId: number;
  favorite: boolean;
  openDropdown: OpenDropdown;
  toggleDropdown: (id: number, source: 'notes' | 'favorites') => void;
  source: 'notes' | 'favorites'
}

function DropdownMenu({deleteNote, toggleFavorite, setEditedId, noteId, favorite, openDropdown, toggleDropdown, source}: DropdownMenuProps) {
  
  const isOpen = openDropdown?.id === noteId && openDropdown?.source === source;

  return (
    <>
      <button className="dropdown-trigger"
      onClick={(e) => {e.stopPropagation(); toggleDropdown(noteId, source)}}>⋮</button>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={(e) => {e.stopPropagation();
          deleteNote(noteId);  
          toggleDropdown(noteId, source);
          }}>X</button>
          <button onClick={(e) => {e.stopPropagation()
          setEditedId(noteId);
          toggleDropdown(noteId, source)
          }}>Update title</button>
          <button onClick={(e) => {e.stopPropagation();
          toggleFavorite(noteId); 
          toggleDropdown(noteId, source);
          }}>
            {favorite ? 'Delete from favorites' : 'Add to favorites'}
          </button>
        </div>
      )}
    </>
  )
}

export default DropdownMenu;
import type { OpenDropdown } from '../hooks/useDropdown';
import type { Note } from '../types/note';

import DropdownMenu from './DropdownMenu';

interface FavoritesProps {
    favList: Note[];
    updateTitle: (id: number, newTitle: string) => void;
    editedId: number | null;
    setEditedId: (id: number | null) => void;
    deleteNote: (id: number)=> void;
    toggleFavorite: (id: number) => void;
    onNoteClick: (id: number | null) => void;
    openDropdown: OpenDropdown;
    toggleDropdown: (id: number, sourse: 'notes' | 'favorites') => void;
}


function Favorites({favList, updateTitle, editedId, setEditedId, deleteNote, toggleFavorite, onNoteClick, openDropdown, toggleDropdown}: FavoritesProps) {


  return (
      <ul className='fav-notes'>
      {favList.map(note=> (
          <li key={note.id} onClick={()=> onNoteClick(note.id)}>
            {editedId === note.id ? (
              <input type="text"
              value={note.title}
              onChange={(e)=> updateTitle(note.id, e.target.value)}
              onBlur={()=> setEditedId(null)}
              onKeyDown={(e)=> {if (e.key === 'Enter') setEditedId(null)}} />
            ) : (
              <h3>{note.title}</h3>
            )}

            <p>{note.text}</p>
              
            <DropdownMenu
            deleteNote={deleteNote}
            toggleFavorite={toggleFavorite}
            setEditedId={setEditedId}
            noteId={note.id}
            favorite={note.favorite}
            openDropdown={openDropdown}
            toggleDropdown={(id)=> toggleDropdown(id, 'favorites')}
            sourse='favorites'/>
          </li>
        ))}
    </ul>
  ) 
}

export default Favorites
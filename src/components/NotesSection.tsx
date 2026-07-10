import {useEffect, useRef} from 'react'
import type {Note} from '../types/note'

import DropdownMenu from './DropdownMenu';
import type { OpenDropdown } from '../hooks/useDropdown';

interface NotesSectionProps {
    filteredNotes: Note[];
    editedId: number | null;
    setEditedId: (id: number | null)=> void;
    updateTitle: (id: number, newTitle: string)=> void;
    deleteNote: (id: number)=> void;
    toggleFavorite: (id: number)=> void;
    onNoteClick: (id: number | null)=> void;
    openDropdown: OpenDropdown;
    toggleDropdown: (id: number, sourse: 'notes' | 'favorites') => void;
}

function NotesSection({filteredNotes, editedId, setEditedId, updateTitle, deleteNote, toggleFavorite, onNoteClick, openDropdown, toggleDropdown}: NotesSectionProps) {
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=> {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [editedId])


  return (
        <ul className='note-list'>

          {filteredNotes.map(note=> (
            <li key={note.id} onClick={()=> onNoteClick(note.id)}>

              {editedId === note.id ? (
                <input type="text"
                ref={inputRef}
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
              toggleDropdown={toggleDropdown}
              openDropdown={openDropdown}
              sourse='notes'/>
            </li>
          ))}
        </ul>
    )
}

export default NotesSection
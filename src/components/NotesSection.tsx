import type {Note} from '../types/note'

interface NotesSectionProps{
    filteredNotes: Note[];
    editedId: number | null;
    setEditedId: (id: number | null)=> void;
    updateTitle: (id: number, newTitle: string)=> void;
    deleteNote: (id: number)=> void;
    toggleFavorite: (id: number)=> void;
}

function NotesSection({filteredNotes, editedId, setEditedId, updateTitle, deleteNote, toggleFavorite}: NotesSectionProps) {
    return (
        <ul className='note-list'>

          {filteredNotes.map(note=> (
            <li key={note.id}>

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
              <button className='delete-note'
              onClick={()=> deleteNote(note.id)}>X</button>
              <button className='update-title'
              onClick={()=> setEditedId(note.id)}>Update title</button>
              <button className='addToFav'
              onClick={()=> toggleFavorite(note.id)}>{note.favorite ? 'Delete from favorites' : 'Add to favorites'}</button>
            </li>
          ))}
        </ul>
    )
}

export default NotesSection
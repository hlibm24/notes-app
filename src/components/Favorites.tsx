import type { Note } from '../types/note';

interface FavoritesProps {
    favList: Note[];
    updateTitle: (id: number, newTitle: string) => void;
    editedId: number | null;
    setEditedId: (id: number | null) => void;
    deleteNote: (id: number)=> void;
    toggleFavorite: (id: number) => void;
    onNoteClick: (id: number | null) => void;
}


function Favorites({favList, updateTitle, editedId, setEditedId, deleteNote, toggleFavorite, onNoteClick}: FavoritesProps) {

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
              <button className='delete-note'
              onClick={(e)=> {deleteNote(note.id)
                e.stopPropagation()
              }}>X</button>
              <button className='update-title'
              onClick={(e)=> {setEditedId(note.id)
                e.stopPropagation()
              }}>Update title</button>
              <button className='addToFav'
              onClick={(e)=> {toggleFavorite(note.id)
                e.stopPropagation()
              }}>{note.favorite ? 'Delete from favorites' : 'Add to favorites'}</button>
            </li>
          ))}
    </ul>
    )
    
}

export default Favorites
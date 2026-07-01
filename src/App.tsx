import { useState, useEffect } from 'react'
import './App.css'

interface Note {
  id: number;
  title: string;
  text: string;
  favorite: boolean;
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [editedId, setEditedId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>(()=> {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : []
  });
  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])


  const createNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title: 'New note',
      text: '',
      favorite: false,
    }
    setNotes(prev=>[...prev, newNote]);
  }


  const filteredNotes = notes.filter(note=> note.title.toLowerCase().includes(searchText.toLowerCase()) || note.text.toLowerCase().includes(searchText.toLowerCase()));


  const deleteNote = (id: number) => {
    setNotes(prev=>
      prev.filter(note=> note.id !== id)
    )
  }

  const updateTitle = (id: number, newTitle: string) => {
    setNotes(prev=>
      prev.map(note=> 
        note.id === id ? {...note, title: newTitle} : note
      )
    )
  }


  return (
    <>
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
      <div className='main-section'>
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
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

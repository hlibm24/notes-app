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
  
  const [notes, setNotes] = useState<Note[]>(()=> {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : []
  });
  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])


  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  useEffect(()=> {
    setFilteredNotes(notes)
  }, [notes])

  const noteSearch = (text: string) => {
    setSearchText(text);
  }


  const createNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title: 'New note',
      text: '',
      favorite: false,
    }
    setNotes(prev=>[...prev, newNote]);
  }


  const checkNote = () => {
    const filtered = notes.filter(note=> note.title.toLowerCase().includes(searchText.toLowerCase()) || note.text.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredNotes(filtered);
  }


  const deleteNote = (id: number) => {
    setNotes(prev=>
      prev.filter(note=> note.id !== id)
    )
  }


  return (
    <>
      <div className='nav-bar'>
        <div className='search-section'>
          <input type="text"
          onChange={(e)=> noteSearch(e.target.value)}/>
          <button className='search-btn'
          onClick={()=> checkNote()}>Search</button>
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

              
              <p>{note.text}</p>
              <button className='delete-note'
              onClick={()=> deleteNote(note.id)}>X</button>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

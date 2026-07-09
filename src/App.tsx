import './App.css'

import SearchBar from './components/SearchBar';
import NotesSection from './components/NotesSection';
import Favorites from './components/Favorites';
import Modal from './components/Modal';


import {useSearch} from './hooks/useSearch';
import {useNote} from './hooks/useNoteItem';
import {useNotes} from './hooks/useNotes';
import { useState } from 'react';



function App() {
  const {searchText, setSearchText} = useSearch();
  const {editedId, setEditedId, setNotes, createNote, notes} = useNotes();
  const {deleteNote, updateTitle, updateText,toggleFavorite} = useNote(setNotes);

  const filteredNotes = notes.filter(note=> note.title.toLowerCase().includes(searchText.toLowerCase()) || note.text.toLowerCase().includes(searchText.toLowerCase()));

  const favList = notes.filter(note=> note.favorite === true);


  // Modal window logic
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);
  const selectedNote = notes.find(note=> note.id === selectedNoteId);
  const isModalOpen = selectedNote !== null && selectedNote !== undefined;

  const handleCloseModal = () => {
    setSelectedNoteId(null)
  }

  return (
    <>
      <SearchBar
      searchText={searchText}
      setSearchText={setSearchText}
      createNote={createNote}
      />
      <div className='main-section'>
          <Favorites
          favList={favList}
          updateTitle={updateTitle}
          editedId={editedId}
          setEditedId={setEditedId}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
          onNoteClick={setSelectedNoteId}
            />

          <NotesSection
          filteredNotes={filteredNotes}
          editedId={editedId}
          setEditedId={setEditedId}
          updateTitle={updateTitle}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
          onNoteClick={setSelectedNoteId}
          />
      </div>

      {isModalOpen && (
        <Modal
        selectedNote={selectedNote}
        handleCloseModal={handleCloseModal}
        updateText={updateText}
      />
      )}
      
    </>
  )
}

export default App

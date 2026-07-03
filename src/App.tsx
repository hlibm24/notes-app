import './App.css'

import SearchBar from './components/SearchBar';
import NotesSection from './components/NotesSection';
import Favorites from './components/Favorites';

import {useSearch} from './hooks/useSearch';
import {useNote} from './hooks/useNoteItem';
import {useNotes} from './hooks/useNotes';
import {useFavorites} from './hooks/useFavorites';


function App() {
  const {setSearchText} = useSearch();
  const {editedId, setEditedId, setNotes, createNote, filteredNotes} = useNotes();
  const {deleteNote, updateTitle, toggleFavorite} = useNote(setNotes);
  const {favList} = useFavorites();


  return (
    <>
      <SearchBar
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
            />

          <NotesSection
          filteredNotes={filteredNotes}
          editedId={editedId}
          setEditedId={setEditedId}
          updateTitle={updateTitle}
          deleteNote={deleteNote}
          toggleFavorite={toggleFavorite}
          />
      </div>
    </>
  )
}

export default App

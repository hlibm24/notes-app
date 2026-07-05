import type { Note } from '../types/note';

interface UseNoteReturn {
  deleteNote: (id: number) => void;
  updateTitle: (id: number, newTitle: string) => void;
  updateText: (id: number, newText: string) => void;
  toggleFavorite: (id: number) => void;
}


export function useNote(setNotes: React.Dispatch<React.SetStateAction<Note[]>>): UseNoteReturn {

    
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

  const updateText = (id: number, newText: string) => {
    setNotes(prev=>
      prev.map(note=>
        note.id === id ? {...note, text: newText} : note
      )
    )
  }

  const toggleFavorite = (id: number) => {
    setNotes(prev=>
      prev.map(note=>
        note.id === id ? {...note, favorite: !note.favorite} : note
      )
    )
  }

  
  return {
    deleteNote,
    updateTitle,
    toggleFavorite,
    updateText,
  }
}
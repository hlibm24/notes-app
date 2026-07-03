import {useState, useEffect} from 'react'
import {useSearch} from '../hooks/useSearch'
import type {Note} from '../types/note'

export function useNotes() {
    const {searchText} = useSearch();

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


    return {
        editedId,
        setEditedId,
        notes,
        setNotes,
        createNote, 
        filteredNotes,
        
    }
}


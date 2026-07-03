import {useNotes} from '../hooks/useNotes'

export function useFavorites() {
    const {notes} = useNotes();

    const favList = notes.filter(note=> note.favorite === true)

    return {
        favList,
    }
}


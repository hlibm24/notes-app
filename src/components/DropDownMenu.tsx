import {useState, useEffect} from 'react';


interface DropDownMenuProps {
    deleteNote: (id: number)=> void;
    toggleFavorite: (id: number)=> void;
    setEditedId: (id: number | null)=> void;
    noteId: number;
    favorite: boolean;
}

function DropDownMenu ({deleteNote, toggleFavorite, setEditedId, noteId, favorite}:DropDownMenuProps) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        const handleClickOutside = () => setIsOpen(false);
        document.addEventListener('click', handleClickOutside);
        return ()=> {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])

    return (
        <>
            <button onClick={(e)=> {e.stopPropagation(); setIsOpen(!isOpen)}}>⋮</button>
            {isOpen && (
                <div className='dropDown-menu'>
                <button className='delete-note'
                onClick={(e)=> {deleteNote(noteId)
                e.stopPropagation()
                }}>X</button>
                <button className='update-title'
                onClick={(e)=> {setEditedId(noteId)
                e.stopPropagation()
                }}>Update title</button>
                <button className='addToFav'
                onClick={(e)=> {toggleFavorite(noteId)
                e.stopPropagation()
                }}>{favorite ? 'Delete from favorites' : 'Add to favorites'}</button>
                </div>
            )}
        </>
    )
}

export default DropDownMenu
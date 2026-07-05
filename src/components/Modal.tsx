import type {Note} from '../types/note';

interface ModalProps {
    selectedNote: Note;
    handleCloseModal: ()=> void;
    updateText: (id: number, newText: string) => void;
}

function Modal({selectedNote, handleCloseModal, updateText}: ModalProps) {

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h3>{selectedNote.title}</h3>
                <textarea value={selectedNote.text}
                onChange={(e)=> updateText(selectedNote.id, e.target.value)}
                />
                <button onClick={()=> handleCloseModal()}>Close</button>
            </div>
        </div>
    )
}


export default Modal;
import { useState } from 'react';
import './Note.css';
import lockImage from '../../assets/lock.png';
import deleteImage from '../../assets/delete.png';

const Note = (props) => {

    const [disabled, setDisabled] = useState(props.note.lock);

    const lockHandler = (e)=> {
        setDisabled(!disabled);
        props.updateLock(props.note.id, !disabled);
    }

    return (
        <div className='note'style={ {backgroundColor: props.note.color} }>
            
            <textarea 
                className="note__text custom-scroll" 
                defaultValue={props.note.text} disabled={disabled}
                onChange = { (e)=> props.updateText(props.note.id, e.target.value) }
            ></textarea>
            
            <div className='note__footer'>
                <p className='note__time'>{props.note.time}</p>
                <div>
                    <img className='note__icon' 
                         src={lockImage} alt='lock' 
                         onClick={ lockHandler }/>
                    
                    <img className='note__icon' 
                         src={deleteImage} alt='delete'
                         onClick={()=> props.deleteNote(props.note.id)} />
                </div>
            </div>
        </div>
    )
}

export default Note;
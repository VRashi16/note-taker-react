import { useState, useEffect } from 'react';
import NoteContainer from './components/Notes/NoteContainer';
import SideBar from './components/SideBar/SideBar';

const DUMMY_NOTES = [
  {
    id: 'n3',
    text: 'Hey there, Add your note by clicking the plus icon and choosing the theme color',
    time: 'Jul 28, 3:50 PM',
    color: '#FBA1A1',
    lock: false
  },
  {
    id: 'n2',
    text: 'You can lock your note by clicking the lock icon and unlock with the same',
    time: 'Jul 25, 8:00 PM',
    color: '#C4DFAA',
    lock: false
  },
  {
      id: 'n1',
      text: 'You can delete your note too by clicking the delete icon. \n\nYes..Yes you can delete these instruction notes too',
      time: 'Jul 18, 10:55 AM',
      color: '#F5F0BB',
      lock: false
  }
];

const App = () => {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app')) || DUMMY_NOTES
  );

  const addNoteHandler = (themeColor) => {
      const note = {
        id: Date.now() + "" + Math.floor(Math.random()*78),
        text: '',
        time: new Date().toLocaleDateString('en-US', { hourCycle: 'h12', minute: '2-digit', day: '2-digit', month: 'short', hour: '2-digit'}),
        color: themeColor,
        lock: false
      }
      setNotes( (prevNotes)=>{
        return [note, ...prevNotes];
      });
  }

  const deleteNoteHandler = (noteId) => {
    const prevNotes = [...notes];
    
    let indexToDelete = prevNotes.findIndex( (note)=> note.id === noteId );
    if(indexToDelete < 0) return;

    prevNotes.splice(indexToDelete, 1);
    setNotes(prevNotes);
  }
  
  const updateTextHandler = (noteId, textValue) => {
    const prevNotes = [...notes];
    
    let indexToUpdate = prevNotes.findIndex( (note)=> note.id === noteId );
    if(indexToUpdate < 0) return;

    prevNotes[indexToUpdate].text = textValue;
    setNotes(prevNotes);
  }

  const updateLockHandler = (noteId, lockStatus) => {
    const prevNotes = [...notes];
    
    let indexToLock = prevNotes.findIndex( (note)=> note.id === noteId );
    if(indexToLock < 0) return;

    console.log(indexToLock + " " + noteId + " " + lockStatus)

    prevNotes[indexToLock].lock = lockStatus;
    console.log(prevNotes[indexToLock].lock)
    setNotes(prevNotes);
  }
  
  // IMPLEMENTING LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('react-notes-app', JSON.stringify(notes));
  }, [notes])
  
  return(
    <div className='app'>
      <SideBar addTheme ={ addNoteHandler } />
      <NoteContainer 
          notes={notes} 
          deleteNote = { deleteNoteHandler }
          updateText = { updateTextHandler }
          updateLock = { updateLockHandler } />
    </div>
  );
  
}

export default App;
import { useState, useEffect } from 'react';
import { checkToken } from '../../utilities/users-service';

export default function NoteHistoryPage({user}){
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  
  function addNote(note){
    setNotes([...notes, note]);
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    console.log(evt);
  }
  function handleChange(evt) {
    setNewNote({...newNote, [evt.target.name]: evt.target.value});
    console.log(evt.target.value);
  }
  return (
    <div>
      <h1>My Notes</h1>
      <div>
        <form onSubmit={handleSubmit} autoComplete='off' >
          <label >Note</label>
          <input type="text" name='note' onChange={handleChange} value={newNote} required />
          <button type='submit' >Add Note</button>
        </form>
      </div>
      <hr />
      <div>
        {notes.length ? (
          <ul>
            {notes.map((note, idx) => (
              <li>
                {note.text} {new Date(note.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <h3>No notes yet </h3>
        )}
      </div>
    </div>
  )
}
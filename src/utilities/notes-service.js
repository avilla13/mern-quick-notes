// utilities/notes-service.js
import * as notesAPI from './notes-api'

export async function createNote(newNote){
    const note = await notesAPI.createNote(newNote);
    console.log(`notes-service.js createNote_note: ${note}`);
    return note
}
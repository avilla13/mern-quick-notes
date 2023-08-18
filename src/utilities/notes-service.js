// utilities/notes-service.js
import * as notesAPI from './notes-api'

export async function createNote(newNote){
    const note = await notesAPI.createNote(newNote);
    return note
}
// routes/api/notes.js
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// ALL paths START with '/api/notes'

// POST /api/notes (create a note)
router.post('/new', notesCtrl.createNote);



module.exports = router;
module.exports = function(app) {
    const {listNotes, 
        newNote, 
        getNote,
        delIdNote } = require('../controllers/notes')

    app.get('/notes', listNotes) //lista todas las notas

    app.post('/note', newNote) // nueva notas

    app.get('/note/:id', getNote) //entrega una nota

    app.delete('/note/:id', delIdNote) //Borrar por ID
    
}
/* Controllers*/

//esquema
const Note = require("../models/notes")

async function listNotes ( req, res ) {
    //entrega la lista de notas
    await Note.find({},  )
    .then( (result) => {
        // console.log('Entregado OK listNotes()' + result)
        res.json(result)
    } )
    .catch( (error) =>{
        console.log('Error listNotes()' + error)
        res.json(error)
    } )
}

async function newNote ( req, res ) {
    //graba una nota
    const { note } = req.body;
    console.log(` llego ${note}`)
    const newNote = new Note
    newNote.note = note
    await newNote.save()
        .then( (result) => {
            // console.log('Agregado OK newNote()' + result)
            res.json( result )
        } )
        .catch( (error) =>{
            console.log('Error newNote()' + error)
            res.json( error )
        } )
}

async function getNote ( req, res ) {
    //obtiene una nota
    
}

async function delIdNote ( req, res ) {
    //borra una nota
    
}

module.exports = {
        listNotes, 
        newNote, 
        getNote, 
        delIdNote } 
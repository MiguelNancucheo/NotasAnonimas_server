const cnxmongoose = require("../config/mongoose")
/* ****************************************************** */
/*    Schema                                              */
/* ****************************************************** */

const NoteSchema = new cnxmongoose.Schema({
    note: {
            type: String, 
            require: [true, "Se requiere de comment"],
            minlength: [3, 'Mínimo 3 caracteres'], 
            maxlength: [60, 'Máximo 60 caracteres.']
        }
 }, { timestamps: true } )


const Note = cnxmongoose.model('Note', NoteSchema);

module.exports = Note


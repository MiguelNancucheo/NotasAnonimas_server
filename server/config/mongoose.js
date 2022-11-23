/* mongoose.js */
const cnxmongoose = require('mongoose') 

cnxmongoose.connect('mongodb://0.0.0.0:27017/NotasAnonimas_db', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(()=> console.log("Se conecto a NotasAnonimas_db"))
    .catch((error)=> console.log(error));

 module.exports = cnxmongoose
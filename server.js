let express = require("express")
const app =  express()
const cors = require('cors')
app.use(express.json());
app.listen(8000, function() {
    console.log('responde por el puerto 8000')
})

app.use(cors())

require('./server/config/routes')(app)
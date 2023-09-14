const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

app.use ( // permite accesar desde un origen distinto
    cors({ 
        origin: "http://localhost:3000"  // URL de react
    })
)

require("./server/config/mongoose.config"); // inicializamos la bd

const misRutas = require("./server/routes/autor.routes"); // importamos rutas
misRutas(app);

app.listen(8000, ()=>console.log("Servidor listo !")); // ejecutamos el server

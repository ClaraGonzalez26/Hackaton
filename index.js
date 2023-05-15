import express from "express";
import cors from "cors";

//importar rutas
import indexRouter from './Routers/indexRouter.js'
import archivosRouter from './Routers/archivosRouter.js'


const app = express();
app.use(cors())
app.use(express.static("Archivos"))

//ahora haremos que esta app pueda procesar solicitudes con datos en formato JSON, esto hara que recibamos datos JSON y los convierta en un objeto JavaScript
app.use(express.json());


//asociamos una ruta específica a un router específico
app.use('/api', indexRouter)

app.use('/api/archivos', archivosRouter)


//iniciamos el servidor

const PORT = process.env.PORT || 5000

app.listen (PORT, () => console.log(`La aplicación está escuchando solicitudes en el puerto ${PORT}.`))

import express, { Router } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import config from "./config"
import livroRoutes from "./routes/livro-routes"

const app = express ();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', livroRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port))
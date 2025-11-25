import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import connect from "./models/connection";

dotenv.config({ path: '/' });

const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);
console.log(PORT);

const app = express(); 
app.use(express.json());
connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

app.use(express.json());
app.use(routes);

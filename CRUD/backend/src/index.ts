import http from "http";
import express from "express";
import cors from "cors";
import usuarioRotas from "./routes/usuarioRotas";
import dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.PORT) || 3001;
const MAX_HEADER_SIZE = process.env.MAX_HEADER_SIZE ? Number(process.env.MAX_HEADER_SIZE) : 16 * 1024; // 16KB default override

const app = express();
app.use(cors({
  exposedHeaders: [],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use("/api", usuarioRotas);

const server = http.createServer({ maxHeaderSize: MAX_HEADER_SIZE }, app);
server.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT} (maxHeaderSize=${MAX_HEADER_SIZE})`)
);


import { pool } from "../models/db";

async function init() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query("DROP TABLE IF EXISTS usuario");

    await client.query(`
      CREATE TABLE IF NOT EXISTS usuario (
        id serial PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query("COMMIT");

    console.log("Tabela criada com sucesso!");
  } catch (e) {
    await client.query("ROLLBACK");
    console.error("Erro ao criar tabela:", e);
  } finally {
    client.release();
  }
}

init();


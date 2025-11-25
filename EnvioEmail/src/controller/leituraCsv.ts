import * as fs from 'fs';
import { parse } from 'csv-parse';

async function lerCSV(caminhoArquivo: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const registros: any[] = [];

        const leitor = fs.createReadStream(caminhoArquivo)
            .pipe(parse({
                columns: true, // Assume que o CSV tem cabeçalho
                skip_empty_lines: true,
                delimiter: ',',
            }));

        leitor.on('data', (linha) => {
            registros.push(linha);
        });

        leitor.on('end', () => {
            resolve(registros);
        });

        leitor.on('error', (erro) => {
            reject(erro);
        });
    });
}

async function LeituraEmailCsv() {
    const caminho = 'csv/emails.csv'; 
    const dados = await lerCSV(caminho); // Corrigido
    return dados;
}

export default LeituraEmailCsv;
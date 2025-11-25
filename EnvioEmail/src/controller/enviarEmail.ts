import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import 'dotenv/config';
import LeituraEmailCsv from './leituraCsv';
import Handlebars from 'handlebars';
import proximoMes from './recuperarProximoMes'
import calcularIdade from './calcularIdade';


async function enviarEmail() {
    try {

        const dadosEmail = await LeituraEmailCsv();
        console.log('dados email', dadosEmail);

        const htmlMessage = await fs.readFile("./src/mensagem.html", "utf-8");

        // Configuração do transporte SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const nomeProximoMes = proximoMes;
        const date = new Date()

        for (const destinatario of dadosEmail) {
            const nascDate = new Date(destinatario.Nasc); // Converte string para Date
          
            if (date.getDate() === nascDate.getDate() && date.getMonth() === nascDate.getMonth()) {

                console.log('Enviando para:', destinatario.Email);

                const template = Handlebars.compile(htmlMessage);
                const idade = await calcularIdade(nascDate);
            
                const dadosCliente = { nome: destinatario.Nome, percdesc: idade, mesquevem: nomeProximoMes };
                const emailHtml = template(dadosCliente);

                const info = await transporter.sendMail({
                    from: `${process.env.EMAIL_USER}`,
                    to: destinatario.Email,
                    subject: "Envio de e-mail",
                    html: emailHtml,
                });

                console.log("E-mail enviado:", info.response);
            }
        }

        return 'E-mail(s) enviado(s) com sucesso.';
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw error;
    }
}

export default enviarEmail;

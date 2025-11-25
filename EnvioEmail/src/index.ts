import enviarEmail from './controller/enviarEmail';

(async () => {
    const resultado = await enviarEmail();
    console.log('Retorno da função:', resultado);
})();

// const enviarEmail: any();
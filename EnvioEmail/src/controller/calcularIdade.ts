async function calcularIdade(dataNascimento: Date): Promise<number> {
    return new Promise((resolve) => {
        let hoje = new Date();
        let idade: number = hoje.getFullYear() - dataNascimento.getFullYear();
        const m: number = hoje.getMonth() - dataNascimento.getMonth();

        if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }

        resolve(idade);
    });
}

export default calcularIdade;

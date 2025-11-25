class ContaBancaria{
    saldo: number;

    constructor(saldo: number){
        this.saldo = saldo;
    }

    depositar(valor: number): void{
        this.saldo += valor;
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }

    sacar(valor: number): void{
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
}

class Cliente{
    nome: string;
    conta: ContaBancaria;
    cpf: string;
    nasc: Date;
    nomemae: string;

    constructor(nome: string, conta: ContaBancaria, cpf: string, nasc: Date, nomemae: string){
        this.nome = nome;
        this.conta = conta;
        this.cpf = cpf;
        this.nasc = nasc;
        this.nomemae = nomemae;
    }

}

let cliente = new Cliente("Ana Silva", new ContaBancaria(0), "123.456.789-00", new Date(1990, 5, 15), "Maria Silva");
cliente.conta.depositar(100);
cliente.conta.sacar(50);
cliente.conta.sacar(60);

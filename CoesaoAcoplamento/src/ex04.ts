class Agenda{
    contatos: Contato[];
    constructor(contatos: Contato[] = []){
        this.contatos = contatos;
    }
    adicionarContato(contato: Contato){
        this.contatos.push(contato);
    }
    removerContato(contato: Contato){
        this.contatos = this.contatos.filter(c => c.nome !== contato.nome);
    }

    imprimir(): void{
        console.log("Contatos na agenda:");
        for(let contato of this.contatos){
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
        }   
    }
}

class Contato{
    nome: string;
    telefone: string;

    constructor(nome: string, telefone: string){
        this.nome = nome;
        this.telefone = telefone;
    }
}

const agenda = new Agenda();
let contato = new Contato("João", "1234-5678");
agenda.adicionarContato(contato);
contato = new Contato("Maria", "9876-5432");
agenda.adicionarContato(contato);
agenda.imprimir();
agenda.removerContato(new Contato("João", ""));
agenda.imprimir();
class Carrinho{
    itens: Item[];

    constructor(itens: Item[] = []){
        this.itens = itens;
    }
    adicionarItem(item: Item){
        this.itens.push(item);
    }
    removerItem(item: Item){
        this.itens = this.itens.filter(i => i.descricao !== item.descricao);
    }
    calcularTotal(): number{
        let total = 0;
        for(let item of this.itens){
            total += item.valor * item.quantidade;
        }       
        return total;
    }
}

class Pagamento{
    processarPagamento(total: number, forma: string): void {
        console.log(`Pagamento de R$ ${total} em ${forma}, processado com sucesso!`);
    }
}

class Item{
    descricao: string;
    valor: number;
    quantidade: number;

    constructor(descricao: string, valor: number, quantidade: number){
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = quantidade;
    }

}

const carrinhoc = new Carrinho();
let item = new Item("Camiseta",50,2);
carrinhoc.adicionarItem(item);
item = new Item("Calça",130,1);
carrinhoc.adicionarItem(item);
item = new Item("Meia",20,3);
carrinhoc.adicionarItem(item);
const total = carrinhoc.calcularTotal();
console.log(total);
const pagamento = new Pagamento();
pagamento.processarPagamento(total,"dinheiro");

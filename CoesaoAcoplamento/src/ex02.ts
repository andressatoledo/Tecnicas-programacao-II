class CarrinhoDeCompras {
    itens: string[];

    constructor(itens: string[] = []) {
        this.itens = itens;
    }

    adicionarItem(item: string) {
        this.itens.push(item);
    }
    removerItem(item: string) {
        this.itens = this.itens.filter(i => i !== item);
    }

     imprimir(){
        return "Itens no carrinho: " + this.itens.join(", ")
     }
}


const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Camiseta");
carrinho.adicionarItem("Calça");
carrinho.adicionarItem("Meia");
carrinho.removerItem("Camiseta");
console.log(carrinho.imprimir());
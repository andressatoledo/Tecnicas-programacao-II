class AutenticacaoDeUsuario{
    usuarios: Map<string, string>;

    constructor(){
        this.usuarios = new Map<string, string>();
    }

    registrarUsuario(username: string, senha: string): void{
        this.usuarios.set(username, senha);
        console.log(`Usuário ${username} registrado com sucesso.`);
    }

    autenticarUsuario(username: string, senha: string): boolean{
        const senhaArmazenada = this.usuarios.get(username);
        if(senhaArmazenada && senhaArmazenada === senha){
            console.log(`Usuário ${username} autenticado com sucesso.`);
            return true;
        } else {
            console.log(`Falha na autenticação do usuário ${username}.`);
            return false;
        }
    }
}

const autenticacao = new AutenticacaoDeUsuario();
autenticacao.registrarUsuario("alice", "senha123");
autenticacao.registrarUsuario("bob", "senha567");
var usuarioAutenticado = autenticacao.autenticarUsuario("alice", "senha123");
var usuarioAutenticado = autenticacao.autenticarUsuario("bob", "senha123");

export default function proximoMes() {
    const hoje = new Date();
    const proximoMes = new Date(hoje.setMonth(hoje.getMonth() + 1));
    const nomeMes = proximoMes.toLocaleString('pt-BR', { month: 'long' });

    return nomeMes
}
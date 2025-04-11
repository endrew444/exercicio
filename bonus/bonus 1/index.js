// Classe Relogio
class Relogio {
    constructor(elemento) {
        this.elemento = elemento; // Recebe o elemento HTML onde o relógio será exibido
    }

    // Atualiza o conteúdo do elemento com a hora atual
    atualizar() {
        const agora = new Date(); // Obtém a data e hora atual
        const horaFormatada = agora.toLocaleTimeString(); // Formata a hora no padrão HH:MM:SS
        this.elemento.textContent = horaFormatada; // Atualiza o texto do elemento com a hora formatada
    }

    // Inicia o relógio com atualização a cada segundo
    iniciar() {
        this.atualizar(); // Atualiza o relógio imediatamente ao iniciar
        setInterval(() => this.atualizar(), 1000); // Configura uma atualização a cada 1 segundo
    }
}

// Quando o DOM estiver carregado, cria e inicia o relógio
document.addEventListener("DOMContentLoaded", () => {
    const divRelogio = document.getElementById('relogio'); // Seleciona o elemento HTML com o ID 'relogio'
    const relogio = new Relogio(divRelogio); // Cria uma instância da classe Relogio
    relogio.iniciar(); // Inicia o relógio
});

// Classe do jogo
class Jogo {
    constructor(numeroMax, elementoMensagem) {
        // Gera um número secreto aleatório entre 1 e o número máximo (inclusive)
        this.numeroSecreto = Math.floor(Math.random() * numeroMax) + 1;
        this.tentativas = 0; // Inicializa o contador de tentativas
        this.mensagem = elementoMensagem; // Referência ao elemento onde as mensagens serão exibidas
        this.jogoFinalizado = false; // Indica se o jogo foi finalizado
    }

    tentar(valor) {
        // Se o jogo já foi finalizado, não faz nada
        if (this.jogoFinalizado) return;

        const numero = Number(valor); // Converte o valor recebido para número
        this.tentativas++; // Incrementa o contador de tentativas

        // Verifica se o número inserido é igual ao número secreto
        if (numero === this.numeroSecreto) {
            this.mensagem.innerHTML = `🎉 Parabéns! Você acertou o número ${this.numeroSecreto} em ${this.tentativas} tentativas.`; // Mensagem de sucesso
            this.jogoFinalizado = true; // Finaliza o jogo
        } else if (numero < this.numeroSecreto) {
            // Se o número é menor que o número secreto
            this.mensagem.innerHTML = "🔼 Tente um número **maior**.";
        } else if (numero > this.numeroSecreto) {
            // Se o número é maior que o número secreto
            this.mensagem.innerHTML = "🔽 Tente um número **menor**.";
        } else {
            // Caso o valor inserido não seja válido
            this.mensagem.innerHTML = "Digite um número válido.";
        }
    }
}

// Inicializa o jogo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const divMensagem = document.getElementById("mensagem"); // Seleciona o elemento para exibir mensagens
    window.jogo = new Jogo(100, divMensagem); // Cria uma instância do jogo com número máximo 100 e torna acessível globalmente
});

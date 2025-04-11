// Classe ContaBancaria
class ContaBancaria {
    // Construtor que define o titular da conta e o saldo inicial (padrão é 0)
    constructor(titular, saldo = 0) {
        this.titular = titular; // Nome do titular da conta
        this.saldo = saldo;     // Saldo inicial da conta
    }

    // Método para realizar depósito
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor; // Adiciona o valor ao saldo
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo."); // Caso o valor seja inválido
        }
    }

    // Método para realizar saque
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor; // Subtrai o valor do saldo
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque."); // Quando o valor excede o saldo
        } else {
            console.log("O valor do saque deve ser positivo."); // Quando o valor é zero ou negativo
        }
    }

    // Método para exibir o saldo atual
    exibirSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Exemplo de uso da classe ContaBancaria
const conta = new ContaBancaria("João", 1000); // Cria uma nova conta com R$1000 de saldo inicial
conta.exibirSaldo(); // Mostra o saldo atual

conta.depositar(500); // Deposita R$500
conta.exibirSaldo();  // Mostra o novo saldo

conta.sacar(300);     // Realiza um saque de R$300
conta.exibirSaldo();  // Mostra o saldo após o saque

conta.sacar(1500);    // Tentativa de saque maior que o saldo atual — será recusado

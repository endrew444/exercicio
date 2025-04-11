// Classe Aluno
class Aluno {
    constructor(nome) {
        this.nome = nome; // Atributo para armazenar o nome do aluno
        this.notas = []; // Atributo para armazenar as notas do aluno
    }

    adicionarNota(nota) {
        // Método para adicionar uma nota válida (entre 0 e 10)
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
        } else {
            console.log("Nota inválida. Deve estar entre 0 e 10.");
        }
    }

    calcularMedia() {
        // Método para calcular a média das notas
        if (this.notas.length === 0) return 0; // Retorna 0 se não houver notas
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0); // Soma todas as notas
        return soma / this.notas.length; // Calcula a média
    }

    situacao() {
        // Método para verificar a situação do aluno (Aprovado ou Reprovado)
        const media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
}

// Classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome; // Atributo para armazenar o nome do produto
        this.preco = preco; // Atributo para armazenar o preço do produto
        this.quantidade = quantidade; // Atributo para armazenar a quantidade em estoque
    }

    vender(qtd) {
        // Método para vender uma quantidade do produto
        if (qtd > 0 && qtd <= this.quantidade) {
            this.quantidade -= qtd; // Reduz a quantidade em estoque
            console.log(`${qtd} unidade(s) de ${this.nome} vendida(s).`);
        } else {
            console.log("Quantidade insuficiente em estoque ou inválida.");
        }
    }

    repor(qtd) {
        // Método para repor uma quantidade ao estoque
        if (qtd > 0) {
            this.quantidade += qtd; // Aumenta a quantidade em estoque
            console.log(`${qtd} unidade(s) de ${this.nome} adicionada(s) ao estoque.`);
        } else {
            console.log("Quantidade para reposição deve ser positiva.");
        }
    }

    exibirInfo() {
        // Método para exibir as informações do produto
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Quantidade em estoque: ${this.quantidade}`);
    }
}

// Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular; // Atributo para armazenar o nome do titular da conta
        this.saldo = saldo; // Atributo para armazenar o saldo da conta
    }

    depositar(valor) {
        // Método para depositar um valor na conta
        if (valor > 0) {
            this.saldo += valor; // Adiciona o valor ao saldo
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        // Método para sacar um valor da conta
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor; // Reduz o saldo
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque."); // Mensagem de saldo insuficiente
        } else {
            console.log("O valor do saque deve ser positivo."); // Mensagem de valor inválido
        }
    }

    consultarSaldo() {
        // Método para exibir o saldo atual da conta
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Exemplos de uso

// Aluno
const aluno = new Aluno("Endrew"); // Cria uma instância da classe Aluno
aluno.adicionarNota(8); // Adiciona uma nota válida
aluno.adicionarNota(6); // Adiciona outra nota válida
aluno.adicionarNota(9); // Adiciona mais uma nota válida
console.log(`Média: ${aluno.calcularMedia()}`); // Exibe a média das notas
console.log(`Situação: ${aluno.situacao()}`); // Exibe a situação do aluno (Aprovado ou Reprovado)

// Produto
const produto = new Produto("Notebook", 2500, 10); // Cria uma instância da classe Produto
produto.exibirInfo(); // Exibe as informações do produto
produto.vender(3); // Vende 3 unidades do produto
produto.exibirInfo(); // Exibe as informações atualizadas do produto
produto.repor(5); // Reabastece o estoque com 5 unidades
produto.exibirInfo(); // Exibe as informações atualizadas do produto

// ContaBancaria
const conta = new ContaBancaria("Endrew", 1000); // Cria uma instância da classe ContaBancaria
conta.consultarSaldo(); // Exibe o saldo inicial da conta
conta.depositar(500); // Realiza um depósito de R$500
conta.consultarSaldo(); // Exibe o saldo atualizado
conta.sacar(300); // Realiza um saque de R$300
conta.consultarSaldo(); // Exibe o saldo atualizado
conta.sacar(1500); // Tenta realizar um saque maior que o saldo disponível (saldo insuficiente)
// Classe Funcionario
class Funcionario {
    // Construtor que define o nome, salário e cargo do funcionário
    constructor(nome, salario, cargo) {
        this.nome = nome;       // Nome do funcionário
        this.salario = salario; // Salário inicial
        this.cargo = cargo;     // Cargo do funcionário
    }

    // Método para aumentar o salário com base em um percentual
    aumentarSalario(percentual) {
        if (percentual > 0) {
            const aumento = (this.salario * percentual) / 100; // Calcula o valor do aumento
            this.salario += aumento; // Atualiza o salário com o aumento
            console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
        } else {
            console.log("O percentual de aumento deve ser positivo."); // Validação de entrada
        }
    }

    // Método para exibir as informações do funcionário
    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$${this.salario.toFixed(2)}`);
        console.log(`Cargo: ${this.cargo}`);
    }
}

// Exemplo de uso
const funcionario = new Funcionario("Maria", 3000, "Desenvolvedora"); // Criação de objeto com cargo
funcionario.exibirInfo(); // Exibe informações antes do aumento

funcionario.aumentarSalario(10); // Aumenta o salário em 10%
funcionario.exibirInfo(); // Exibe informações após o aumento

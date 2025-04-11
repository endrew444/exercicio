// Classe Veiculo
class Veiculo {
    // Construtor que define os atributos básicos do veículo
    constructor(marca, modelo, ano) {
        this.marca = marca;     // Marca do veículo (ex: Toyota)
        this.modelo = modelo;   // Modelo do veículo (ex: Corolla)
        this.ano = ano;         // Ano de fabricação do veículo
    }

    // Método para exibir as informações do veículo
    exibirInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Subclasse Carro que herda da classe Veiculo
class Carro extends Veiculo {
    // Construtor que chama o construtor da classe pai (Veiculo) e adiciona um novo atributo
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);  // Chama o construtor da classe Veiculo
        this.quantidadePortas = quantidadePortas; // Número de portas do carro
    }

    // Sobrescreve o método exibirInfo para adicionar a informação da quantidade de portas
    exibirInfo() {
        super.exibirInfo(); // Chama o método da classe pai para exibir marca, modelo e ano
        console.log(`Quantidade de Portas: ${this.quantidadePortas}`); // Exibe o número de portas
    }
}

// Exemplo de uso da classe Veiculo
const veiculo = new Veiculo("Toyota", "Corolla", 2020);
// Exibe as informações do veículo
veiculo.exibirInfo();

console.log("\n"); // Linha em branco para separar visualmente a saída

// Exemplo de uso da classe Carro
const carro = new Carro("Honda", "Civic", 2022, 4);
// Exibe as informações do carro, incluindo a quantidade de portas
carro.exibirInfo();

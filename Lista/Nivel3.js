// Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome; // Nome do funcionário
        this.salario = salario; // Salário do funcionário
    }

    salarioTotal() {
        // Método para calcular o salário total (sem bônus)
        return this.salario;
    }
}

// Classe Gerente (herda de Funcionario)
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario); // Chama o construtor da classe base
        this.bonus = bonus; // Bônus do gerente
    }

    salarioTotal() {
        // Método sobrescrito para calcular o salário total com bônus
        return this.salario + this.bonus;
    }
}

// Classe Animal
class Animal {
    constructor(nome) {
        this.nome = nome; // Nome do animal
    }

    som() {
        // Método genérico para som (deve ser sobrescrito)
        return "Som genérico";
    }

    falar() {
        // Método para exibir o som do animal
        console.log(`${this.nome} faz: ${this.som()}`);
    }
}

// Subclasse Cachorro (herda de Animal)
class Cachorro extends Animal {
    som() {
        // Sobrescreve o método som
        return "Au au";
    }
}

// Subclasse Gato (herda de Animal)
class Gato extends Animal {
    som() {
        // Sobrescreve o método som
        return "Miau";
    }
}

// Classe Carro
class Carro {
    #velocidade; // Atributo privado

    constructor() {
        this.#velocidade = 0; // Inicializa a velocidade como 0
    }

    acelerar() {
        // Método para aumentar a velocidade
        this.#velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.#velocidade} km/h`);
    }

    frear() {
        // Método para reduzir a velocidade
        this.#velocidade = Math.max(this.#velocidade - 10, 0); // Garante que não fique negativa
        console.log(`Freando... Velocidade atual: ${this.#velocidade} km/h`);
    }

    getVelocidade() {
        // Método para obter a velocidade atual
        return this.#velocidade;
    }
}

// Exemplos de uso

// Funcionario e Gerente
const funcionario = new Funcionario("Carlos", 3000); // Cria um funcionário com nome e salário
console.log(`Salário de ${funcionario.nome}: R$${funcionario.salarioTotal()}`); // Exibe o salário total do funcionário

const gerente = new Gerente("Ana", 5000, 2000); // Cria um gerente com nome, salário e bônus
console.log(`Salário total de ${gerente.nome}: R$${gerente.salarioTotal()}`); // Exibe o salário total do gerente (incluindo bônus)

// Animal, Cachorro e Gato
const cachorro = new Cachorro("Rex"); // Cria um cachorro com nome
cachorro.falar(); // Exibe o som do cachorro ("Au au")

const gato = new Gato("Mimi"); // Cria um gato com nome
gato.falar(); // Exibe o som do gato ("Miau")

// Carro
const carro = new Carro(); // Cria um carro com velocidade inicial 0
carro.acelerar(); // Aumenta a velocidade em 10 km/h
carro.acelerar(); // Aumenta a velocidade em mais 10 km/h
carro.frear(); // Reduz a velocidade em 10 km/h
console.log(`Velocidade final: ${carro.getVelocidade()} km/h`); // Exibe a velocidade final do carro
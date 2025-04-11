// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; // Atributo para armazenar o nome da pessoa
        this.idade = idade; // Atributo para armazenar a idade da pessoa
    }

    apresentar() {
        // Método para exibir uma mensagem de apresentação
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Classe Livro
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo; // Atributo para armazenar o título do livro
        this.autor = autor; // Atributo para armazenar o autor do livro
        this.paginas = paginas; // Atributo para armazenar o número de páginas do livro
    }

    exibirInfo() {
        // Método para exibir as informações do livro
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
    }
}

// Classe Calculadora
class Calculadora {
    static somar(a, b) {
        // Método estático para somar dois números
        return a + b;
    }

    static subtrair(a, b) {
        // Método estático para subtrair dois números
        return a - b;
    }

    static multiplicar(a, b) {
        // Método estático para multiplicar dois números
        return a * b;
    }

    static dividir(a, b) {
        // Método estático para dividir dois números
        if (b !== 0) {
            // Verifica se o divisor não é zero
            return a / b;
        } else {
            // Exibe uma mensagem de erro se o divisor for zero
            console.log("Erro: Divisão por zero não é permitida.");
            return null;
        }
    }
}

// Exemplos de uso

// Pessoa
const pessoa = new Pessoa("Endrew", 17); // Cria uma instância da classe Pessoa
pessoa.apresentar(); // Chama o método apresentar para exibir a mensagem

// Livro
const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1178); // Cria uma instância da classe Livro
livro.exibirInfo(); // Chama o método exibirInfo para exibir as informações do livro

// Calculadora
console.log(`Soma: ${Calculadora.somar(10, 5)}`); // Exibe o resultado da soma
console.log(`Subtração: ${Calculadora.subtrair(10, 5)}`); // Exibe o resultado da subtração
console.log(`Multiplicação: ${Calculadora.multiplicar(10, 5)}`); // Exibe o resultado da multiplicação
console.log(`Divisão: ${Calculadora.dividir(10, 5)}`); // Exibe o resultado da divisão
console.log(`Divisão por zero: ${Calculadora.dividir(10, 0)}`); // Testa a divisão por zero
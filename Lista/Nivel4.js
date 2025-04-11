// Sistema de Biblioteca
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo; // Título do livro
        this.autor = autor; // Autor do livro
    }
}

class Biblioteca {
    constructor() {
        this.livros = []; // Array para armazenar os livros
    }

    adicionarLivro(livro) {
        // Método para adicionar um livro à biblioteca
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    listarLivros() {
        // Método para listar todos os livros
        console.log("Livros na biblioteca:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
        });
    }

    buscarPorTitulo(titulo) {
        // Método para buscar um livro pelo título
        const livro = this.livros.find(livro => livro.titulo === titulo);
        if (livro) {
            console.log(`Livro encontrado: ${livro.titulo} - ${livro.autor}`);
        } else {
            console.log(`Livro com título "${titulo}" não encontrado.`);
        }
    }
}

// To-Do List
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao; // Descrição da tarefa
        this.concluida = false; // Status da tarefa (inicialmente não concluída)
    }

    concluir() {
        // Método para marcar a tarefa como concluída
        this.concluida = true;
        console.log(`Tarefa "${this.descricao}" concluída.`);
    }

    exibir() {
        // Método para exibir a tarefa
        console.log(`[${this.concluida ? "X" : " "}] ${this.descricao}`);
    }
}

class ListaTarefas {
    constructor() {
        this.tarefas = []; // Array para armazenar as tarefas
    }

    adicionarTarefa(tarefa) {
        // Método para adicionar uma tarefa à lista
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa.descricao}" adicionada à lista.`);
    }

    listarTarefas() {
        // Método para listar todas as tarefas
        console.log("Lista de Tarefas:");
        this.tarefas.forEach(tarefa => tarefa.exibir());
    }
}

// Simulador de Loja Online
class Produto {
    constructor(nome, preco) {
        this.nome = nome; // Nome do produto
        this.preco = preco; // Preço do produto
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.produtos = []; // Array para armazenar os produtos no carrinho
    }

    adicionarProduto(produto) {
        // Método para adicionar um produto ao carrinho
        this.produtos.push(produto);
        console.log(`Produto "${produto.nome}" adicionado ao carrinho.`);
    }

    removerProduto(nome) {
        // Método para remover um produto pelo nome
        const index = this.produtos.findIndex(produto => produto.nome === nome);
        if (index !== -1) {
            const removido = this.produtos.splice(index, 1)[0];
            console.log(`Produto "${removido.nome}" removido do carrinho.`);
        } else {
            console.log(`Produto "${nome}" não encontrado no carrinho.`);
        }
    }

    calcularTotal() {
        // Método para calcular o total do carrinho
        const total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
        console.log(`Total do carrinho: R$${total.toFixed(2)}`);
        return total;
    }
}

// Exemplos de uso

// Sistema de Biblioteca
const biblioteca = new Biblioteca();
const livro1 = new Livro("1984", "George Orwell"); // Cria um livro com título e autor
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien"); // Cria outro livro
biblioteca.adicionarLivro(livro1); // Adiciona o primeiro livro à biblioteca
biblioteca.adicionarLivro(livro2); // Adiciona o segundo livro à biblioteca
biblioteca.listarLivros(); // Lista todos os livros da biblioteca
biblioteca.buscarPorTitulo("1984"); // Busca um livro pelo título

// To-Do List
const listaTarefas = new ListaTarefas();
const tarefa1 = new Tarefa("Estudar JavaScript"); // Cria uma tarefa
const tarefa2 = new Tarefa("Fazer exercícios"); // Cria outra tarefa
listaTarefas.adicionarTarefa(tarefa1); // Adiciona a primeira tarefa à lista
listaTarefas.adicionarTarefa(tarefa2); // Adiciona a segunda tarefa à lista
listaTarefas.listarTarefas(); // Lista todas as tarefas
tarefa1.concluir(); // Marca a primeira tarefa como concluída
listaTarefas.listarTarefas(); // Lista as tarefas novamente, mostrando a conclusão

// Simulador de Loja Online
const carrinho = new CarrinhoDeCompras();
const produto1 = new Produto("Notebook", 2500); // Cria um produto com nome e preço
const produto2 = new Produto("Mouse", 150); // Cria outro produto
carrinho.adicionarProduto(produto1); // Adiciona o primeiro produto ao carrinho
carrinho.adicionarProduto(produto2); // Adiciona o segundo produto ao carrinho
carrinho.calcularTotal(); // Calcula o total do carrinho
carrinho.removerProduto("Mouse"); // Remove o produto "Mouse" do carrinho
carrinho.calcularTotal(); // Calcula o total novamente após a remoção
// Classe para validar formulário
class FormularioUsuario {
    constructor(form, divErros, divSucesso) {
        this.form = form; // Referência ao formulário HTML
        this.divErros = divErros; // Div onde os erros serão exibidos
        this.divSucesso = divSucesso; // Div onde a mensagem de sucesso será exibida

        // Adiciona um evento de 'submit' ao formulário
        this.form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário
            this.validar(); // Chama o método de validação
        });
    }

    validar() {
        // Obtém os valores dos campos do formulário e remove espaços extras
        const nome = this.form.nome.value.trim();
        const email = this.form.email.value.trim();
        const senha = this.form.senha.value.trim();

        const erros = []; // Array para armazenar mensagens de erro

        // Regras de validação
        if (nome.length < 3) erros.push("Nome deve ter pelo menos 3 caracteres."); // Valida o nome
        if (!email.includes("@") || !email.includes(".")) erros.push("Email inválido."); // Valida o email
        if (senha.length < 6) erros.push("Senha deve ter pelo menos 6 caracteres."); // Valida a senha

        // Exibir erros ou mensagem de sucesso
        if (erros.length > 0) {
            // Se houver erros, exibe-os na div de erros
            this.divErros.innerHTML = erros.join("<br>");
            this.divSucesso.innerHTML = ""; // Limpa a mensagem de sucesso
        } else {
            // Se não houver erros, exibe a mensagem de sucesso
            this.divErros.innerHTML = ""; // Limpa os erros
            this.divSucesso.innerHTML = "Formulário enviado com sucesso!";
            this.form.reset(); // Reseta os campos do formulário
        }
    }
}

// Inicializa a validação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formulario'); // Seleciona o formulário pelo ID
    const divErros = document.getElementById('erros'); // Seleciona a div de erros pelo ID
    const divSucesso = document.getElementById('sucesso'); // Seleciona a div de sucesso pelo ID

    // Cria uma nova instância da classe FormularioUsuario
    new FormularioUsuario(form, divErros, divSucesso);
});

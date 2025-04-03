const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Abre o modal ao clicar no botão
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal se clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


document.querySelectorAll('.btn-busines-support button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio automático do formulário

        const form = document.getElementById("contactForm");
        form.action = this.getAttribute("data-endpoint"); // Altera o endpoint
        form.submit(); // Envia o formulário para o endpoint correto
    });
});
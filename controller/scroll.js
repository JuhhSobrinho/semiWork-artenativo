window.addEventListener("scroll", function () {
    let header = document.querySelector("header"); // Seleciona o menu/header
    if (window.scrollY > 50) { // Se rolou mais de 50px para baixo
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
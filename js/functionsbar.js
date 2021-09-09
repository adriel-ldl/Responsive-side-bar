let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //Chamando a função
});

searchBtn.addEventListener("click", () => { // Barra lateral aberta quando você clica no ícone de pesquisa
    sidebar.classList.toggle("open");
    menuBtnChange(); //chamando a função 
});

// código para alterar o botão da barra lateral
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //substituindo a classe de ícones
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //substituindo a classe de ícones
    }
}
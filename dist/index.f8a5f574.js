const colorSwitch = document.querySelector('button[type="button"]');
function cambiarTema() {
    if (document.documentElement.getAttribute("tema") == "dia") document.documentElement.setAttribute("tema", "noche");
    else document.documentElement.setAttribute("tema", "dia");
}
colorSwitch.addEventListener("click", cambiarTema);

//# sourceMappingURL=index.f8a5f574.js.map

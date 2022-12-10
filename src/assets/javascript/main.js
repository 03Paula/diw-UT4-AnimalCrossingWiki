const colorSwitch = document.querySelector('button[type="button"]');
var imagen = document.getElementById('imagenTema');

function cambiarTema(){
    if (document.documentElement.getAttribute("tema") == "dia"){
        document.documentElement.setAttribute("tema","noche");
    }
    else{
        document.documentElement.setAttribute("tema","dia");
    }
}


colorSwitch.addEventListener("click", cambiarTema)
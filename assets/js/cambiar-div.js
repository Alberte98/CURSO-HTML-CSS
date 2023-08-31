document.addEventListener("DOMContentLoaded", function () {

  // Obtener el div por su ID
  let divElemento = document.getElementById("mi-div");

  // Obtener boton por su ID
  let botonCambiar = document.getElementById("cambiar-div");

  botonCambiar.addEventListener("click", function () {
    //divElemento.textContent = "Una cabra aqui: "
    divElemento.innerHTML = "<img src='https://media.tenor.com/MRD8R-JrduYAAAAC/goat-goat-lick.gif' alt='Goofy Ahh GOAT' width='15%'>"
    divElemento.style.backgroundColor = "yellow"
    divElemento.style.color = "red"
  });
})
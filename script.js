const form = document.querySelector(".formulario")
const mascform = document.querySelector(".mascform")



function clica() {
    mascform.style.visibility = "visible"
    form.style.left = "35%"
    form.style.transform = "translateX (-50%)"
}

function desclica(){
    mascform.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX (0)"
}
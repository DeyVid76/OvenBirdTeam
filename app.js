const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const email = document.getElementById("email")
const empresa = document.getElementById("company")
const mensaje = document.getElementById("message")
const formulario = document.getElementById("form")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regeXEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <6){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regeXEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(empresa.value.length <3){
        warnings += `Empresa está en blanco <br>`
        entrar = true
    }
    if(mensaje.value.length <1){
        warnings += `El mensaje está en blanco <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
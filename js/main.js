
let formulario = document.querySelector("form")
// const form
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const inputPass = document.querySelector("#password")
const checkbox = document.querySelector("#check")
const registrar = document.querySelector("#sign-up")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submit");
    console.log(inputName.value, inputEmail.value, inputPass.value);
})

registrar.addEventListener("click", function(e){
    if (!checkbox.checked) {
        alert('Debes aceptar los terminos y condiciones para seguir con el registro')    
        e.preventDefault();
    }
    })

function normalizar(nomb, correo, pass) {
    const datos = {
        name: nomb,
        email: correo,
        password: pass
    };
    return datos
}
// 
/* if(!validarNombre(inputName.value)){
    mensajeNombre.classList.remove('oculto');
    inputName.classList.add('error');
}else{
    mensajeNombre.classList.add('oculto');
    inputName.classList.remove('error');
};

function validarNombre(name) {
    let resultado = true;
    let caracteresInvalidos = ["0","1","2", "3", "4", "5", "6", "7", "8", "9", "&", "%", "$", "/", "(", ")", "=", "?", "¿", ",", "!", ".","_",";",":","|","¿"];
    if (name.length < 3 || name.length > 20) {
        resultado = false;       
    }
    caracteresInvalidos.forEach( caracter =>{
        if(name.includes(caracter)){
            resultado = false;
        }
    });

    return resultado;
} */
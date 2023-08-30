document.addEventListener("DOMContentLoaded", function(){

    let form = document.getElementsByTagName("form")[0];

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    function validarForm(event){
        let password = document.getElementById("password1");
        let sndpassword = document.getElementById("password2");
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let check = document.getElementById("terminos");
        event.preventDefault();
        if( nombre.value && apellido.value && email.value && password.value === sndpassword.value && password.value.length >= 6 && sndpassword.value.length >= 6 && check.checked ){
            showAlertSuccess();
        }else{
            showAlertError();
        }
    }
    form.addEventListener("submit", validarForm);
});
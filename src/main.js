function setFormMessage(formElement, type, message){
    const messsageElement= formElement.querySelector(".form_message");

    messsageElement.textContent= message;
    messsageElement.classList.remove("form_message_success", "form_message_error");
    messsageElement.classList.add('form_message_${type}');
}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;
}



document.addEventListener("DOMContentLoaded", () =>{
    const loginForm= document.querySelector("#login");
    const createAccountForm= document.querySelector("#createAccount");

   

    document.querySelector("#linkCreateAccount").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    });

    loginForm.addEventListener("submit", e=>{
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");

    })


});

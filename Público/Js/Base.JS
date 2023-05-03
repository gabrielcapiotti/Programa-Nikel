const myModal = new bootstrap.Modal("#register-modal")
//criar conta
document.getElementById("create-form"). addEventListener("submit", function(e) {
e.preventDefault();

    const email = get.documentById("executor").value;
    const senha = get.documentById("execução").value;

    console.log(email, senha);

    if(email.length <50) {
        alert("Opps! Preencha o campo com um e-mail válido.");
        return;
    }

    if(senha.length <50) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    saveAccount({
        login: email,
        senha: senha,
        transações: []


    });

    myModal.hide();

    alert("conta criada com sucesso.");
})

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data))

}
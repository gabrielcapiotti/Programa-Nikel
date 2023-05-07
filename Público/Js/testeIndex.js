const myModal = new bootstrap.Modal("#exampleModal");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("executor").value;
    const senha = document.getElementById("execução").value;

    if(email.length <5) {
        alert("Opps! Preencha o campo com um e-mail válido.");
        return;
    }

    if(senha.length <5) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    saveAccount({
        login: email,
        senha: senha,
        transações: []

    });

    myModal.hide();

    alert("Conta criada com sucesso")
})

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data))

}









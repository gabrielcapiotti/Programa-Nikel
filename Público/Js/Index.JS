
//criar conta

document.getElementById("link-conta").addEventListener("click", function() {
    alert("O usuário clicou no link criar conta.");

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

    alert("Conta criada com sucesso.");
})

function checkLogged() {
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}


function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data))

}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key)

    if(account) {
        return JSON.parse(account);

    }
        return "";

}


const myModal = new bootstrap.Modal("#register-modal")
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
//logar no sistema
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("executor").value;
    const senha = document.getElementById("execução").value;
    const checkSession = document.getElementById("session-input").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }

    if(account) {
        if(account.senha !== senha) {
            alert("Ops!Verifique o usuário ou senha corretos");
            return;

        }

        saveSession(email, checkSession);
    }

        window.location.href = "home.html";
});
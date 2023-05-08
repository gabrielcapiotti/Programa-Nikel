const myModal = new bootstrap.Modal("#Transações-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transações: []

}

document.getElementById("button-logout").addEventListener("click", logout);

//adicionar lançamento
document.getElementById("Transações-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input");
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transações.unshift ({
        value: value, type: type, description: description, date: date
    });

    saveData(data);
    e.target.reset();
    myModal.hide();

    getTransações();

    alert("Lançamento adicionado com sucesso");

});

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "testeIndex.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }

    getTransações();
}



function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "testeIndex.html";
}

function getTransações() {
    const transações = data.transações;
    let transaçõesHtml = '';

    if (transações.length) {
        transações.forEach((item) => {

            let type = "entrada";

            if(item.type === "2") {
                type = "saída";

            }

            transaçõesHtml += `
            <tr>
                <th scope="row">${item.date}</th>
                <td>${item.value.toFixed(2)}</td>
                <td>${type}</td>
                <td>${item.description}</td>
            </tr>                     
            `
        })

    }
        document.getElementById("transações-list").innerHTML = transaçõesHtml;
}


function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
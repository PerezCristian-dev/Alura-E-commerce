import { createAlert } from "./createAlerts.js";
export class user {
    constructor(username, password) {
        this.username = username,
            this.password = password
    };
    createUser() {
        const user = [this.username, this.password];
        return user
    };
    saveUser(user) {
        const savedUsers = JSON.parse(sessionStorage.getItem('login')) || [];
        let newUser = user.createUser();
        savedUsers.push(newUser);
        sessionStorage.setItem('login', JSON.stringify(savedUsers));
    };
};
let closeUploader = () => {
    const theUploader = document.querySelector(".alerta");
    theUploader.parentElement.removeChild(theUploader);
};

const thebody = document.querySelector("body");
const loginBtn = document.querySelector("[data-loginbtn]");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let theuser = document.querySelector("[data-user]").value;
    let thepassword = document.querySelector("[data-userpassword]").value;

    if (theuser == "" || thepassword == "") {
        const messageSpan = document.querySelectorAll(".input-message-error");

        messageSpan.forEach(span => {
            if (span.parentNode.children[1].value == "") {
                span.classList.remove("theSpanMessage");
                span.classList.add("theSpanMessage");
            }
        });
    } else {
        const users = JSON.parse(sessionStorage.getItem("login")) || [];
        const found = false;
        users.forEach(user => {
            if (user.username == theuser && user.password == thepassword) {
                window.location.assign("products.html");
                found = true;
            }
        });
        if (found == false) {
            window.scrollTo(0, 0);
            window.onscroll = function () {
                window.scrollTo(0, 0);
            };
            let theuser = document.querySelector("[data-user]").value;
            const theAlert = createAlert("Opps...", `We don't have a user for ${theuser}. Please Register`, "wrong", "Register", "Main Menu");
            thebody.appendChild(theAlert);

            const btn1 = document.querySelector("[data-btn1]");
            btn1.addEventListener("click", () => {
                enableScroll()
                closeUploader();

                window.location.assign("register.html");
            });
            const btn2 = document.querySelector("[data-btn2]");
            btn2.addEventListener("click", () => {
                enableScroll()
                closeUploader();
                window.location.assign("index.html");
            });
        }
    }
});

function enableScroll() {
    window.onscroll = function () { };
}

//Creating Registration Section
const theInputs = document.querySelectorAll('.input');
theInputs.forEach(input => {
    const inputLabel = input.parentNode.children[0];
    input.addEventListener("focus", () => {
        inputLabel.classList.add("theInputAnimation");
    });
    input.addEventListener("blur", () => {
        inputLabel.classList.remove("theInputAnimation");
    });
});






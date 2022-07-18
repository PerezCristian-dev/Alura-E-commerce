//import { user } from "./login.js"
import { createAlert } from './createAlerts.js'


class theuser  {
    constructor (username, password){
        this.username = username,
        this.password = password
    };
    createUser (){
        const user = [this.username, this.password];
        return user
    };

    saveUser(user){
        const savedUsers = JSON.parse(sessionStorage.getItem('login'))||[];
        savedUsers.push(user);
        sessionStorage.setItem('login', JSON.stringify(savedUsers));
    };

};


const registrar = document.querySelector(".button__loginRegistrar");
registrar.addEventListener("click",(event)=>{
    event.preventDefault();

    let email = document.querySelector("[data-userprovided]").value;
    let pass = document.querySelector("[data-userpasswordprovided]").value;
    let theuser = email;
    let thepassword = pass;
   

    if(theuser == "" || thepassword == ""){
        const messageSpan = document.querySelectorAll (".input-message-error");
        messageSpan.forEach (span =>{
           
            span.classList.remove ("theSpanMessage");
            if(span.parentNode.children[1].value == ""){
                span.classList.add ("theSpanMessage");
            }
        });
    }else{
    if (email == "" || pass==""){
        const thebody = document.querySelector("main");
            const theAlert = createAlert ("Opss...", "All field most be filled", "wrong", "Continue", "Main Manu");
            thebody.appendChild (theAlert);
            let  btn1 = document.querySelector(".btn1__wrong");
            let  btn2 = document.querySelector(".btn2__wrong");

            btn1.addEventListener("click", ()=>{
                theAlert.parentNode.removeChild(theAlert);
            });

            btn2.addEventListener("click", ()=>{
                theAlert.parentNode.removeChild(theAlert);
                window.location.assign("products.html");
            });

    }else{

        newuser ();

        const thebody = document.querySelector("main");
            const theAlert = createAlert ("Success", "Your user have been register successfully", "success", "Go to login", "Main Manu");
            thebody.appendChild (theAlert);
            let  btn1 = document.querySelector(".btn1__success");
            let  btn2 = document.querySelector(".btn2__success");

            btn1.addEventListener("click", ()=>{
                theAlert.parentNode.removeChild(theAlert);
                window.location.assign("login.html");
            });

            btn2.addEventListener("click", ()=>{
                theAlert.parentNode.removeChild(theAlert);
                window.location.assign("products.html");
            });
        }
    }
});


function newuser (){
    const user = document.querySelector ("[data-userprovided]");
    const password = document.querySelector("[data-userpasswordprovided]");
    const newuser = new theuser (user.value, password.value);  
    newuser.saveUser(newuser);  
}

const theInputs = document.querySelectorAll('.input');


theInputs.forEach (input =>{
    const inputLabel = input.parentNode.children[0];
   
input.addEventListener ("focus", ()=>{
    inputLabel.classList.add("theInputAnimation");
});

input.addEventListener ("blur", ()=>{
    inputLabel.classList.remove("theInputAnimation");
});
});

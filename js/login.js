import { createAlert } from "./createAlerts.js";

export class user  {
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
        let newUser = user.createUser();
        savedUsers.push(newUser);
        sessionStorage.setItem('login', JSON.stringify(savedUsers));
    };
};


    let closeUploader =  ()=>{
        const theUploader = document.querySelector(".alerta"); 
        theUploader.parentElement.removeChild(theUploader);
    };

const thebody = document.querySelector("main");
const loginBtn = document.querySelector("[data-loginBtn]");
loginBtn.addEventListener ("click", (event)=>{
    event.preventDefault();
    const users =  JSON.parse(sessionStorage.getItem("login"))||[];
    const found = false;
                users.forEach(user => {
                    let theuser = document.querySelector("[data-user]").value;
                    let thepassword = document.querySelector("[data-userpassword]").value;
                    console.log(user.username+" : "+ theuser);
                    if (user.username == theuser && user.password == thepassword){
                        window.location.assign("products.html");  
                        found = true;  
                    } 
                });

              if (found == false){
                let theuser = document.querySelector("[data-user]").value;
                const theAlert = createAlert("Opps...",`We don't have a user for ${theuser}. Please Register`, "wrong", "Register", "Main Menu");
                thebody.appendChild (theAlert);
                const btn1 = document.querySelector("[data-btn1]");
                btn1.addEventListener("click", ()=>{
                    closeUploader();
                    window.location.assign("register.html");
                });
                const btn2 = document.querySelector("[data-btn2]");
                btn2.addEventListener("click", ()=>{
                    theAlert.classList.add ("invisible");
                    window.location.assign("index.html");
                });
                }
});





//Creating Registration Section









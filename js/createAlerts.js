export function createAlert(title, message, type, boton1, boton2){
    const alertComponents=`
        <div class="mesaje__alert">
            <div class="alert__${type}"></div>
            <div class="cabeza__${type}">
                <h2>${title}</h2>
            </div>
            <div class="cuerpo">
                <p>${message}</p>
            </div>
            <div class="pie">
                <a class="btn1__${type}" data-btn1>${boton1}</a>
                <a class="btn2__${type}" data-btn2>${boton2}</a>
            </div>
        </div>
        </div>`
    const alerta = document.createElement ("div");
    alerta.setAttribute ('id','alerta');
    alerta.classList.add("alerta");
    alerta.innerHTML = alertComponents;
    return alerta;
};



    
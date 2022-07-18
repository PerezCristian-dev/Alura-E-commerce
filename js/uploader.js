export function createUpload(title, message, boton1){
    const uploadComponents=`
        <div class="upload__alert">
            <div class="closeIcon">
                <div class="crossLeft"></div>
                <div class="crossRight"></div>
            </div>
            <div class="upload__img"><input class ="uploadChooser" type="file"></div>
            <div class="cabeza">
                <h2>${title}</h2>
            </div>
            <div class="cuerpo">
                <p>${message}</p>
            </div>
            <div class="pie">
                <a class="btn1" data-btn1>${boton1}</a>
            </div>
        </div>
        </div>`
    const upload = document.createElement ("div");
    upload.setAttribute ('id','upload');
    upload.classList.add("upload");
    upload.innerHTML = uploadComponents;
    return upload;
 };

 let uploadFiles = ()=>{
    let uploader = createUpload("Upload your file", "Drop files here or browse", "Upload");
    let location = document.querySelector("main");
    window.scrollTo(0, 0);
    window.onscroll = function() {
        window.scrollTo(0, 0);
    };
    location.appendChild(uploader);
 };

 let uploaderIcon = document.querySelector(".uploader__icon");
 uploaderIcon.addEventListener("click",()=> {
    uploadFiles();
    const file = document.querySelector(".uploadChooser");

    file.onchange = ({target}) =>{
       let thefile = target.files[0];
       if(thefile){
        let fileName  = thefile.name;
   
        let theAlert = document.querySelector(".upload__alert");
        let theImage = document.createElement('div');
        theImage.classList.add("theuploaded__file")
        let theImageComponents = `<img class="theuploaded__img" src="assets/img/IMG.png">
        <p class="fileUpload">${fileName}</p>`
        theImage.innerHTML = theImageComponents;
        theAlert.appendChild(theImage);

        const uploadBtn = document.querySelector(".btn1");
        uploadBtn.addEventListener("click", ()=>{
            alert("This feature is not yet available, please copy the link of your web image and paste it on the url input section");
            closeUploader();
        });
       }
    }




    let closer = document.querySelector (".closeIcon");
    closer.addEventListener ("click",closeUploader);
});

let closeUploader =  ()=>{
    const theUploader = document.querySelector(".upload"); 
    theUploader.parentElement.removeChild(theUploader);
    window.onscroll = function() {
    };
};








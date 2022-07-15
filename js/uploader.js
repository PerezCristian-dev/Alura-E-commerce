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
    location.appendChild(uploader);
 };

 let uploaderIcon = document.querySelector(".uploader__icon");
 uploaderIcon.addEventListener("click",()=> {
    uploadFiles();
    let closer = document.querySelector (".closeIcon");
    closer.addEventListener ("click",closeUploader);
});

let closeUploader =  ()=>{
    const theUploader = document.querySelector(".upload"); 
    theUploader.parentElement.removeChild(theUploader);
};



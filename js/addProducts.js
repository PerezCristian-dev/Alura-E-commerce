//create products and add by click

class product {
    constructor (name, price, category, url){
        this.name = name;
        this.price = price;
        this.id = uuid.v4().substr(0,8);
        this.url = url;
        this.category = category;
        this.description = "Lorem ipsum dolor sit amet. Id galisum fugiat ut minus rerum non sequi neque 33 minima facere voluptatibus doloremque est minima sequi ut doloremque praesentium."
    };
    createProduct (){
        const product = document.createElement ("div");
        product.classList.add ("product")
        const productComponents = `<img src="${this.url}" alt="product image" class="product__img">
        <h2 class="product__name">${this.name}</h2>
        <p class="product__price">${this.price}</p>
        <a href="#" class="product__id">${this.id}</a>
        <div class="delete__edit__icon">
            <img src="assets/img/delete.svg" alt="edition__icon" class="edition__icon">
            <img src="assets/img/edit.svg" alt="edition__icon" class="edition__icon">
        </div>`
        product.innerHTML = productComponents;
        return product;
    };

    addProduct (product){
        const theTitle = document.querySelector ("[data-productsContainer]");
        theTitle.appendChild (product);
    };      
    saveItems(categoria, productComponents){
        const savedProducts = JSON.parse(sessionStorage.getItem(categoria))||[];
        savedProducts.push(productComponents);
        sessionStorage.setItem (categoria, JSON.stringify(savedProducts));
    };
};

//Loading Products on productscreen load.

    const keys = Object.keys(sessionStorage);
    const currentProducts = document.querySelectorAll(".product");
    const existingProduct = [];
 
    currentProducts.forEach(currentProduct =>{
        const producto = currentProduct.childNodes[3].innerHTML;
        existingProduct.push (producto);
    });
  
    
//Getting the key of each saved password. 
    keys.forEach (key =>{
        if (key == "IsThisFirstTime_Log_From_LiveServer" || key == "login" || key == "seeProduct"){

        }else{
            const productsOnMemory = JSON.parse(sessionStorage.getItem(key))||[];
        
            productsOnMemory.forEach(productOnMemory =>{
                const name = productOnMemory.name;
                const price = productOnMemory.price;
                const categoria = productOnMemory.category;
                const url = productOnMemory.url;
                const found = existingProduct.includes(name);
                
                if(found == false){
                    if(name == "" || price == "" || categoria == "" || url == ""){
                    }else{
                    const newproduct = new product (name, price, categoria, url);
                    const theproduct = newproduct.createProduct();
                    const productComponents = newproduct;
                 
                    newproduct.addProduct(theproduct);
                    //newproduct.saveItems(categoria, productComponents);
                    };
                };
            });
        };
    });


//Adding functionality to edit and delete buttons

const editBtn = document.querySelectorAll(".edition__icon");

editBtn.forEach(btn =>{
    btn.addEventListener("click", (event)=>{
        const btnNames = event.target.src;
        const btnName = btnNames.toString().substr(btnNames.toString().length-8,4);
        if (btnName == "edit"){
            editProduc (event);
        }else{
            deleteProduc (event);
        };
    }); 
});

function deleteProduc (event){
    const product = event.target;
    const productTarget = product.parentNode.parentNode;
    const productCategoryTarget = product.parentNode.parentNode.parentNode;
    productCategoryTarget.removeChild(productTarget);
};

function editProduc (event){
    let theEdit = event.target;
    let theProductEdit = theEdit.parentNode.parentNode;
    let editName = theProductEdit.children[1];
    let editPrice = theProductEdit.children[2];
    let editImg = theProductEdit.children[0];
    let form = createEditSection ();
    
    theProductEdit.children[0].after(form);

    let formUrlInput = document.getElementById("url");
    let formNameInput = document.getElementById("product");
    let formPricecInput = document.getElementById("price");
    let savedButton = document.querySelector(".button__save");
    let discardButton = document.querySelector(".button__discard");

    formUrlInput.value = editImg.src;
    formNameInput.value= editName.innerHTML;
    formPricecInput.value = editPrice.innerHTML;

    savedButton.addEventListener("click", ()=>{
        editName.innerHTML = formNameInput.value;
        editPrice.innerHTML= formPricecInput.value;
        editImg.src = formUrlInput.value;
        theProductEdit.removeChild(form);
    });

    discardButton.addEventListener("click", ()=>{
        theProductEdit.removeChild(form);
    });
};

function createEditSection (url, name, price){
    const editForm = document.createElement("form");
    editForm.classList.add ("edit__Form");
    const formComponents =`<fieldset class ="form__Field">
        <legend class="add__form__label">Agregar nuevo producto</legend>
        <div class="input-container">
            <label class="label__addproduct" for="url">URL de imagen</label>
            <input name="url" id="url" class="input__addproduct" type="text" placeholder="data:image/png;base64,iVB... .png" required data-tipo="url">
            <span class="input-message-error">| Este campo no es requerido</span>
            <div class="uploader__icon"></div>
        </div>
        <div class="input-container">
            <label class="label__addproduct" for="producto">Nombre del producto</label>
            <input name="producto" id="product" class="input__addproduct" type="text" placeholder="Producto XYZ" required data-tipo="producto" data-nombreProducto>
            <span class="input-message-error">| Este campo no es requerido</span>
        </div>
        <div class="input-container">
            <label class="label__addproduct" for="precio_producto">Precio del producto</label>
            <input name="precio_producto" id="price" class="input__addproduct" type="text" placeholder="$ 60.00" required data-tipo="precio_producto" data-precioProducto>
            <span class="input-message-error">| Este campo no es requerido</span>
        </div>
    </fieldset>
    <div class ="btn__form">
    <a class="button__save" data-addProduct>Save</a>
    <a class="button__discard" data-addProduct>Discard</a>
    <div>`;
    editForm.innerHTML = formComponents;
    return editForm;
};





/*const theDocument = document.querySelector("body");
theDocument.addEventListener ("click", ()=>{
    const name = prompt ("what's the name?", "Playstation 5");
    const price = prompt ("what's the price?", 50);
    const categoria = prompt ("What's the cathegory?", "Star Wars");
    const url = prompt ("What's the url?","assets/img/prod1.png");
    const newproduct = new product (name, price, categoria, url);
    const theproduct = newproduct.createProduct();
    const productComponents = newproduct;
    newproduct.addProduct(theproduct);
    newproduct.saveItems(categoria, productComponents);
});*/







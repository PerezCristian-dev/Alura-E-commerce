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
window.onload = ()=>{
    const keys = Object.keys(sessionStorage);
    const currentProducts = document.querySelectorAll(".product");
    const existingProduct = [];
 
    currentProducts.forEach(currentProduct =>{
        const producto = currentProduct.childNodes[3].innerHTML;
        existingProduct.push (producto);
});

   

    
//Getting the key of each saved password. 

    keys.forEach (key =>{
        if (key == "IsThisFirstTime_Log_From_LiveServer" || key == "login"){

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
                    }  
                }

            });
        }
    });
}


const editBtn = document.querySelectorAll(".edition__icon");

editBtn.forEach(btn =>{
    btn.addEventListener("click", (event)=>{

        const product = event.target;
        console.log(product);
        
    });
    
})








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







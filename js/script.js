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
        <a href="#" class="product__id">${this.id}</a>`
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


class objectcategories {
    constructor (category){
        this.category = category;
    };
    createCategory (){
        const category = document.createElement ("div");
        category.classList.add ("product__container")
        const categoryComponents = `
        <div class="section__header">
            <h2 class="product__title" data-category>${this.category}</h2>
            <div class="seeAll">
                <a class="product__seeAll">Ver todo</a>
                <img src="assets/img/seeAll_Arrow.svg" alt="">
            </div>
        </div>
        <div class="product__cards"></div>`
        category.innerHTML = categoryComponents;
        return category;     
    };
};


//declaring variables to be use.
const btnConsole = document.querySelector("banner__btn");
const categories = document.querySelectorAll(".product__container");
const theCategories = [];
const theProducts = [];
const Keys = Object.keys(sessionStorage);
const productContainer = document.querySelector(".product__section"); 


    categories.forEach(category =>{
        const nombreCategoria = category.childNodes[1].outerText;
        theCategories.push(nombreCategoria.slice(0,nombreCategoria.length-9));
    });

//Searching through keys on session storage to get the product category
Keys.forEach(key => {
    if (key == "IsThisFirstTime_Log_From_LiveServer" || key == "login" || key == "seeProduct") {

    } else {
        //Creating new category and adding products to it
        if (theCategories.includes(key) == false) {

            const products = JSON.parse(sessionStorage.getItem(key)) || [];
            console.log("Categoria Nueva");

            const categoriaNueva = new objectcategories (key).createCategory();
            const categoriaNuevaCard = categoriaNueva.children[0].children[1];
            console.log(categoriaNuevaCard);

            productContainer.appendChild(categoriaNueva);

            products.forEach(product =>{
                const createdProduct = createProduct(product.name, product.price, product.category, product.url);
                categoriaNueva.children[1].appendChild(createdProduct);
            });
        } else {

            //Adding products to existing categories if category already exist
            console.log("Categoria existe");

            categories.forEach(category => {
                const nombreCategoria = category.childNodes[1];
                const currentCategory = nombreCategoria.outerText.trim().slice(0, nombreCategoria.outerText.trim().length - 9);
                const productCategory = key;
                //const productCards = nombreCategoria.parentElement.children[1];
                const products = JSON.parse(sessionStorage.getItem(key)) || [];

                if (currentCategory == productCategory) {
                    const productCard = nombreCategoria.parentElement.children[1];
                    products.forEach(product => {
                        console.log(product);
                        const createdProduct = createProduct(product.name, product.price, product.category, product.url);
                        productCard.appendChild(createdProduct);
                    });
                };
            });
        };
    };
});

    function createProduct(name, price, category, url){
        const newproduct = new product (name, price, category, url);
        const theproduct = newproduct.createProduct();
        return theproduct;
    };













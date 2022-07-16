const searchBar = document.querySelector (".search__bar");
const listOfProducts = [];
const products = document.querySelectorAll (".product");
const headers = document.querySelectorAll(".section__header");

searchBar.addEventListener("focus", ()=>{
headers.forEach(head =>{
    head.classList.add("productHide");
    });
});

searchBar.addEventListener("blur", ()=>{
    headers.forEach(head =>{
        head.classList.remove("productHide");
     });
     products.forEach(product => {
        product.classList.remove("productHide");        
     });

     const findFound = document.querySelectorAll(".no__found");
     const theSection = document.querySelector(".product__cards");
     findFound.forEach(findF =>{
        console.log(theSection);
        theSection.removeChild(findF);
     }); 

});    

searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value;
    if (searchValue == " " || searchValue == "") {
        products.forEach(product => {
            const NotSearchProduct = product.children[1].parentNode;
            NotSearchProduct.classList.remove("productHide");
        });
    } else {
        products.forEach(product => {
            const foundProducts = product.children[1].innerHTML.toLowerCase();
            if (foundProducts.includes(searchValue.toLowerCase())) {
                const NotSearchProduct = product.children[1].parentNode;
                NotSearchProduct.classList.remove("productHide");
                const foundProduct = product.children[1];
               
            } else {
                const NotSearchProduct = product.children[1].parentNode;
                NotSearchProduct.classList.add("productHide");
            }
        });
    }

    const productSection = document.querySelector(".product__cards");
    const hiddenProducts = document.querySelectorAll(".productHide");
    if(products.length == hiddenProducts.length - 1){
        const productNotFound = createNotFound();

        const findFound = document.querySelector(".no__found");
        console.log(findFound);
        if(findFound ==undefined){
            productSection.appendChild(productNotFound);
        }
    }else{
        const findFound = document.querySelectorAll(".no__found");
        const theSection = document.querySelector(".product__cards");
        findFound.forEach(findF =>{
           console.log(theSection);
           theSection.removeChild(findF);
        }); 
    };
});



function createNotFound(){
    const noFoundText = document.createElement("div");
    noFoundText.classList.add("no__found");
    const noFoundTextCompounts = `<p class="no__found__text">Product Not Found</p>`
    noFoundText.innerHTML = noFoundTextCompounts;
    return noFoundText;
};












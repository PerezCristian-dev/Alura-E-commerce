const searchBar = document.querySelector (".search__bar");
const listOfProducts = [];
const products = document.querySelectorAll (".product");
const banner = document.querySelector (".banner");
const headers = document.querySelectorAll(".section__header");

searchBar.addEventListener("focus", ()=>{
banner.classList.add("productHide");
headers.forEach(head =>{
    head.classList.add("productHide");
    });
});

searchBar.addEventListener("blur", ()=>{
    banner.classList.remove("productHide");
    headers.forEach(head =>{
        head.classList.remove("productHide");
     });
     products.forEach(product => {
    product.classList.remove("productHide");
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
                console.log(foundProduct.parentNode)
            } else {
                const NotSearchProduct = product.children[1].parentNode;
                NotSearchProduct.classList.add("productHide");
            }
        });
    }
});










class product {
    constructor(url, name, price){
        this.url = url;
        this.name =  name;
        this.price = price;
    }
    createPage(){
        const name = this.name;
        const price = this.price;
        const url = this.url;
        sessionStorage.setItem("seeProduct", JSON.stringify([name, price, url]));
        const currentPage = window;
        const newpage = window.open("productdetails.html");
    };
} 

const allProductLinks = document.querySelectorAll(".product__link");


allProductLinks.forEach(link =>{
link.addEventListener("click", (event)=>{
    event.preventDefault();
    const url = link.parentNode.children[0].src;
    const name = link.parentNode.children[1].innerHTML; 
    const price = link.parentNode.children[2].innerHTML;
    const theProduct = new product (url, name, price);
    theProduct.createPage();

    });
});





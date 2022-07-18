const searchBar = document.querySelector (".search__bar");
const listOfProducts = [];
const products = document.querySelectorAll (".product");
//const headers = document.querySelectorAll(".section__header");

searchBar.addEventListener("focus", ()=>{
    const theHead = document.querySelector(".theHead");
    const theBar = createSearchBar ();
    theHead.after(theBar);
});

searchBar.addEventListener("blur", ()=>{
    const theBody = document.querySelector("body");
    const theBar = document.querySelector(".found__products");
    theBody.removeChild(theBar);

     /*products.forEach(product => {
        product.classList.remove("productHide");        
     });*/

     const findFound = document.querySelectorAll(".no__found");
     const searchSpace = document.querySelector(".searchproduct__container");
     findFound.forEach(findF =>{
       
        searchSpace.removeChild(findF);
     }); 

});    

let counter = 1;
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
               // NotSearchProduct.classList.remove("productHide");
                NotSearchProduct.classList.add ("match");
                const foundProduct = product.children[1];
            } else {
                const NotSearchProduct = product.children[1].parentNode;
                //NotSearchProduct.classList.add("productHide");
                NotSearchProduct.classList.remove ("match");
            }
        });
    };

    const matches = document.querySelectorAll('.match');
    const searchSpace = document.querySelector(".searchproduct__container");
    matches.forEach(match=>{
        const theURL = match.children[0].currentSrc;
        const theName = match.children[1].innerHTML;
        const thePrice = match.children[2].innerHTML;
        const matchProduct = seachProduct(theURL,theName,thePrice);
        searchSpace.appendChild(matchProduct);
        //searchSpace.removeChild(matchProduct);
    });

    const productSection = document.querySelector(".product__cards");
    const hiddenProducts = document.querySelectorAll(".productHide");
    if(products.length == hiddenProducts.length - 1){
        const productNotFound = createNotFound();

        const findFound = document.querySelector(".no__found");
        if(findFound ==undefined){
            productSection.appendChild(productNotFound);
        }
    }else{
        const findFound = document.querySelectorAll(".no__found");
        const theSection = document.querySelector(".product__cards");
        findFound.forEach(findF =>{
           theSection.removeChild(findF);
        }); 
    };

 
    
   

    function createProductArray (products){
        const productArray = products;
        return productArray;
    };




    const labarra = document.querySelector('.search__bar');
    if(labarra.value == ""){
        allProducts.forEach(product =>{
            product.parentNode.removeChild(product);
        });
    }else{
       
        const allProducts = document.querySelectorAll('.searched__product');
        const previousProducts = createProductArray(allProducts);
    listOfProducts.push(previousProducts);
    console.log(listOfProducts);

    const previousArrayLength = listOfProducts.length-1;
    const lastArrayLength= listOfProducts[listOfProducts.length-1].length;

    console.log(listOfProducts[listOfProducts.length-1].length);
        
        if (previousArrayLength <= 1) {
            console.log(listOfProducts);
            console.log(previousArrayLength);
        } else {
            for (let x = 0; x < (lastArrayLength); x++) {
                

                console.log(allProducts[x]);
                allProducts[x].parentNode.removeChild(allProducts[x])
            };

        }

    };
    


/*    allProducts.forEach(product =>{
        console.log(product);
        previousProducts.push(product);
       
    });*/

});






function createNotFound(){
    const noFoundText = document.createElement("div");
    noFoundText.classList.add("no__found");
    const noFoundTextCompounts = `<p class="no__found__text">Product Not Found</p>`
    noFoundText.innerHTML = noFoundTextCompounts;
    return noFoundText;
};



function createSearchBar (){
const searchSpace = document.createElement("div");
searchSpace.classList.add("found__products");
searchBarComponents = `<div class ="searchproduct__container">
  
</div>`
searchSpace.innerHTML = searchBarComponents;
return searchSpace;
};

function seachProduct (url,name, price){
    const newProductFound = document.createElement ("div");
    newProductFound.classList.add("searched__product");
  const theProductComponents =  `<img src="${url}" alt="product image" class="seachproduct__img">
  <h2 class="product__name">${name}</h2>
  <p class="product__price">${price}</p>
  <a href="#" class="product__id">See Product</a>` 
  newProductFound.innerHTML = theProductComponents;
  return newProductFound;
};








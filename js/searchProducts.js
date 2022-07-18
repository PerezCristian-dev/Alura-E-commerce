const searchBar = document.querySelector (".search__bar");
let listOfProducts = [];
let productsCreated = [];
const products = document.querySelectorAll (".product");
//const headers = document.querySelectorAll(".section__header");

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


//////////////////////////////////////////////////Code starts here//////////////////////////////////////////////////////
//Adding and removing search bar
const labarradeBusqueda = ()=>{
    const theHead = document.querySelector(".theHead");
    const theBar = createSearchBar ();
    theHead.after(theBar);
};

///listening to the input and adding the match class to the matching elements.
searchBar.addEventListener("input", () => {
const labarra = document.querySelector('.found__products')||null;

    if(labarra){
    } else{
        labarradeBusqueda();
    }

    const searchValue = searchBar.value;
    if (searchValue == " " || searchValue == "") {
        products.forEach(product => {
            const NotSearchProduct = product.children[1].parentNode;
            NotSearchProduct.classList.remove("match");        
        });
    } else {
        products.forEach(product => {
            const foundProducts = product.children[1].innerHTML.toLowerCase();
            if (foundProducts.includes(searchValue.toLowerCase())) {
                const NotSearchProduct = product.children[1].parentNode;
                NotSearchProduct.classList.add ("match");
                const foundProduct = product.children[1];
            } else {
                const NotSearchProduct = product.children[1].parentNode;
                NotSearchProduct.classList.remove ("match");
            }
        });
    };

    let matches = document.querySelectorAll('.match');
    const searchSpace = document.querySelector(".searchproduct__container");
    
    if(matches[0]==undefined){
        listOfProducts = [];
        const allProduct = document.querySelectorAll('.searched__product');
        allProduct.forEach(products=>{
            products.parentNode.removeChild(products);
        });
    }else{

        listOfProducts.push(matches); 
        const theMatches = listOfProducts[listOfProducts.length-1]; 
        for(x=0; x<theMatches.length;x++){
            const match = theMatches[x];
            const theURL = match.children[0].currentSrc;
            const theName = match.children[1].innerHTML;
            const thePrice = match.children[2].innerHTML;
            const matchProduct = seachProduct(theURL,theName,thePrice);
            searchSpace.appendChild(matchProduct);
        };   
        let foundProducts = document.querySelectorAll('.searched__product');
        productsCreated.push (foundProducts);
//Limiting response to the matchs
matches = document.querySelectorAll('.match');
        if(matches.length>6){
        while(foundProducts.length > 6){
            foundProducts[0].parentNode.removeChild(foundProducts[0]);
            foundProducts = document.querySelectorAll('.searched__product');
            };
        }else{
        while(foundProducts.length > matches.length){
        foundProducts[0].parentNode.removeChild(foundProducts[0]);
     
        foundProducts = document.querySelectorAll('.searched__product');
     

    };
        };
    };
});


searchBar.addEventListener("blur", ()=>{
    const theBody = document.querySelector("body");
    const theBar = document.querySelector(".found__products");
    theBody.removeChild(theBar);
     const findFound = document.querySelectorAll(".no__found");
     const searchSpace = document.querySelector(".searchproduct__container");
     findFound.forEach(findF =>{
        searchSpace.removeChild(findF);
     }); 
     searchBar.value ="";
});    
















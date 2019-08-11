import ProductTile from "./components/product-item";

window.onload = (data) =>{
    _init();
};

const _init = () => {
    _getTheData('src/__mock-data__/books.json',(response)=>{
        _renderProducts(response);  
    });
};
const _getTheData = (url,callback) => {
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                try {
                    var data = JSON.parse(xobj.responseText);
                } catch(err) {
                    console.log(err.message + " in " + xobj.responseText);
                    return;
                }
                callback(data);
              }
        };
        xobj.send();   
};
const _renderTileUsingJson = (products) => {
    const productListDiv = document.querySelector(".product-list-display");
    const ul = document.createElement("ul");
    ul.classList.add("product-list");
    for (let book in products) {
        let productTile = new ProductTile();
        productTile.renderProductTitle(ul,products[book]); 
            console.log("output: " + products[book]["title"]);
        }
        productListDiv.appendChild(ul);
};

const _renderProducts = (jsonResponse) => {
    _renderTileUsingJson(jsonResponse);
};
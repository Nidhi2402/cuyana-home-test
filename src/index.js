//import ProductTile from "./components/product-item";
//import * as data from "./../src/__mock-data__/books.json";

window.onload = (data) =>{
    _init();
};

const _init = () => {
    _getTheData('src/__mock-data__/books.json',(response)=>{
        console.log(response);
        //_renderProducts(data);  
    });
};
const _getTheData = (url,callback) => {
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                console.log('responseText:' + xobj.responseText);
                try {
                    var data = JSON.parse(xobj.responseText);
                } catch(err) {
                    console.log(err.message + " in " + xobj.responseText);
                    return;
                }
                callback(xobj.responseText);
              }
        };
        xobj.send();   
};
const _renderTileUsingJson = (products) => {
    const ul = document.createElement("ul");
    ul.classList.add("product-list");
    // products.forEach(product => {
    //     let productTile = new ProductTile();
    //     productTile.renderProductTitle(ul,product);
    // });
};

const _renderProducts = (jsonResponse) => {
    _renderTileUsingJson(jsonResponse);
};
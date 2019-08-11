export default class ProductTile extends HTMLElement {
    renderProductTitle(productContainer,) {
        let productTile = document.createElement("li");
        productTile.classList.add("product-cell");

        let productThumb = document.createElement("div");
        productThumb.classList.add("product-thumb");

        let prodcutDetail = doc.createElement("div");
        prodcutDetail.classList.add("product-detail");

        let toolboxCell = document.createElement("div");
        toolboxCell.classList.add("toolbox-for-product-cell");

        let productImage = document.createElement("img");
        productImage.classList.add("product-thumb");


    }
}
customElements.define("product-tile", ProductTile);
export default class ProductTile extends HTMLElement {
    renderProductTitle(productContainer,prodcutDetails) {
        let productTile = document.createElement("li");
        productTile.classList.add("product-cell");

        let productThumb = document.createElement("div");
        productThumb.classList.add("product-thumb");

        let prodcutDetail = document.createElement("div");
        prodcutDetail.classList.add("product-detail");

        let toolboxCell = document.createElement("div");
        toolboxCell.classList.add("toolbox-for-product-cell");

        let productImage = document.createElement("img");
        productImage.classList.add("product-thumb");
        productImage.src = prodcutDetails["imageLink"];

        let productWikiLink = document.createElement("a");
        productWikiLink.href = prodcutDetails["link"];
        productWikiLink.appendChild(productImage);
        toolboxCell.appendChild(productWikiLink);
        productThumb.appendChild(toolboxCell);
        productTile.appendChild(productThumb);
        productTile.appendChild(prodcutDetail);

        productContainer.appendChild(productTile)
    }
}
customElements.define("product-tile", ProductTile);
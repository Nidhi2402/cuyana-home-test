export default class ProductTile extends HTMLElement {
    renderProductTitle(productContainer,prodcutDetails) {
        let productTile = document.createElement("li");
        productTile.classList.add("product-cell");

        let productThumb = document.createElement("div");
        productThumb.classList.add("product-thumb");

        let prodcutDetail = document.createElement("div");
        prodcutDetail.classList.add("product-detail");

        let productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = prodcutDetails["imageLink"];

        let productWikiLink = document.createElement("a");
        productWikiLink.href = prodcutDetails["link"];
        productWikiLink.appendChild(productImage);
        productThumb.appendChild(productWikiLink);
        productTile.appendChild(productThumb);
        productTile.appendChild(prodcutDetail);

        // Now create the elements for Product(Books) details
        let productTitle = document.createElement("a");
        productTitle.href = prodcutDetails["link"];
        productTitle.classList.add("product-name");
        productTitle.innerHTML = prodcutDetails["title"];
        prodcutDetail.appendChild(productTitle);
        let authorName = document.createElement("span");
        authorName.classList.add("author-name");
        authorName.innerHTML = prodcutDetails["author"];
        prodcutDetail.appendChild(authorName);
        let languageOfBook = document.createElement("span");
        languageOfBook.classList.add("language-of-book");
        languageOfBook.innerHTML = `Language: ${prodcutDetails["language"]}`;
        prodcutDetail.appendChild(languageOfBook);

        productContainer.appendChild(productTile)
    }
}
customElements.define("product-tile", ProductTile);
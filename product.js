// =================API fetching=================
window.onload = () => {
    var data = fetch('https://api.itbook.store/1.0/new').then(res => res.json()).then(json => {
        let apiLength = json.books.length;
        for (i = 0; i <= apiLength - 1; i++) {
            let div = document.createElement('div');
            div.innerHTML = `
<div class="card p-3">
    <img src="${json.books[i].image}" class="pb-3" alt="Loading..." id="image">
    <div class="card-body d-flex flex-column justify-content-around p-0">
        
        <p class="card-text name" id="title">${json.books[i].title}</p>
        <p class="card-text desc mb-0">${json.books[i].subtitle}</p>
        <p class="card-text price mb-0"><sup><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 12 18">
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
        </svg></sup>${json.books[i].price}</p>
        <p class="buttons mb-0 text-center"><span><button class="btn btn-warning my_btn add_cart">Add to cart</button></span></p>
        
    </div>
</div>
`;
            document.getElementById("main").appendChild(div);
            div.setAttribute("class", "col-sm-6 col-md-6 col-lg-3 products");
        }
    });
};
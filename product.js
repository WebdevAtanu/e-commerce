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
        <p class="card-text price mb-0" id="price">${json.books[i].price}</p>
        <p class="buttons mb-0 text-center"><span><button class="btn btn-warning my_btn add_cart">Add to cart</button></span></p>
        
    </div>
</div>
`;
            document.getElementById("main").appendChild(div);
            div.setAttribute("class", "col-sm-6 col-md-6 col-lg-3 products");
        }
    });
};
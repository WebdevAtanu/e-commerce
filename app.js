window.onload = () => {
    var data = fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => {
        for (i = 0; i <= json.length - 1; i++) {
            let div = document.createElement('div');
            div.innerHTML = `
<div class="card p-3">
	<img src="${json[i].image}" class="pb-3" alt="">
	<div class="card-body d-flex flex-column justify-content-around p-0">
		
		<p class="card-text name">${json[i].title}</p>
		<p class="card-text desc mb-0">${json[i].description}</p>
		<p class="rating mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 18">
			<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
			</svg> <span class="">${json[i].rating.rate}</span><span class="raters text-primary">${json[i].rating.count} ratings</span></p>

			<p class="card-text price mb-0"><sup><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 12 18">
				<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
			</svg></sup>${json[i].price}</p>
			<p class="buttons mb-0"><span><a href="#" class="btn my_btn add_cart">Add to cart</a></span><a href="#" class="btn btn-warning my_btn">Buy Now</a></span></p>
			
		</div>
	</div>
	`;
            document.getElementById("main").appendChild(div);
            div.setAttribute("class", "col-sm-12 col-md-6 col-lg-3");
        }

    });
};
document.getElementById("sign").addEventListener("click", () => {
    document.getElementById("login").classList.remove("addborder");
    document.getElementById("sign").classList.add("addborder");
    document.getElementById("login_form").classList.add("hidden_class");
    document.getElementById("sign_form").classList.remove("hidden_class");
})
document.getElementById("login").addEventListener("click", () => {
    document.getElementById("login").classList.add("addborder");
    document.getElementById("sign").classList.remove("addborder");
    document.getElementById("login_form").classList.remove("hidden_class");
    document.getElementById("sign_form").classList.add("hidden_class");
})
setTimeout(() => {
    document.getElementById("overlay").classList.add("fading");
}, 3000);
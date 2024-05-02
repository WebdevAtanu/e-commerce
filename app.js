// =================API fetching=================
window.onload = () => {
    var data = fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => {
        for (i = 0; i <= json.length - 1; i++) {
            let div = document.createElement('div');
            div.innerHTML = `
<div class="card p-3">
	<img src="${json[i].image}" class="pb-3" alt="Loading..." id="image">
	<div class="card-body d-flex flex-column justify-content-around p-0">
		
		<p class="card-text name" id="title">${json[i].title}</p>
		<p class="card-text desc mb-0">${json[i].description}</p>
		<p class="rating mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 18">
			<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
			</svg> <span class="">${json[i].rating.rate}</span><span class="raters text-primary">${json[i].rating.count} ratings</span></p>

			<p class="card-text price mb-0"><sup><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 12 18">
				<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
			</svg></sup>${json[i].price}</p>
			<p class="buttons mb-0 text-center"><span><button class="btn btn-warning my_btn add_cart">Add to cart</button></span></p>
			
		</div>
	</div>
	`;
            document.getElementById("main").appendChild(div);
            div.setAttribute("class", "col-sm-6 col-md-6 col-lg-3 products");
        }

    });
};
// ===============form management=================
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


// =================overlay=================
setTimeout(() => {
    document.getElementById("overlay").classList.add("fading");
}, 3000);


// =================searching=================
let sbox = document.getElementById("searchBox");
sbox.addEventListener("input", (e) => {
    var product = document.querySelectorAll(".products");
    var inp = e.target.value.toLowerCase();
    product.forEach(item => {
        var names = item.textContent.toLowerCase();
        if (names.includes(inp)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

});


// =================toast=================
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

// =================carting=================
setTimeout(() => {
    let cart_btn = document.getElementsByClassName("add_cart");
    let cart_arr = Array.from(cart_btn);

    cart_arr.forEach((button) => {
        button.addEventListener("click", (e) => {
            let cart_elem = e.target.parentNode.parentNode.parentNode.parentNode;
            let title = cart_elem.querySelector("#title").textContent;
            let image = cart_elem.querySelector("#image").getAttribute("src");
            let cartdiv = document.createElement("div");
            cartdiv.innerHTML = `
		<div className="container" id="the_cart">
		<img src="${image}" alt="">
		<p>${title}</p>
		<button class="del_cart" id="remove_cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button>
		</div>
		`
            document.getElementById("cart_section").style.background = "none";
            document.getElementById("check_btn").style.display = "inline-block";
            document.getElementById("cart_elem").appendChild(cartdiv);
             alert("Cart Added");
           

            // =================cart remove=================
            let del_btn = document.getElementsByClassName("del_cart");
            let del_arr = Array.from(del_btn);

            del_arr.forEach((del) => {
                del.addEventListener("click", (e) => {
                    alert("Item Removed");
                    let del_elem = e.target.parentNode.parentNode;
                    del_elem.style.display = "none";
                });
            });
        })
    });
}, 3000);


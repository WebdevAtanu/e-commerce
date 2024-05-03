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
            document.getElementById("alerts").innerHTML = `
<div class="alert alert-primary alert-dismissible fade show float-end" role="alert">
    <strong>Cart Added!</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
                // =================cart remove=================
            let del_btn = document.getElementsByClassName("del_cart");
            let del_arr = Array.from(del_btn);
            del_arr.forEach((del) => {
                del.addEventListener("click", (e) => {
                    document.getElementById("alerts").innerHTML = `
<div class="alert alert-danger alert-dismissible fade show float-end" role="alert">
    <strong>Cart Removed!</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
                    let del_elem = e.target.parentNode.parentNode;
                    del_elem.style.display = "none";
                });
            });
        })
    });
}, 3000);
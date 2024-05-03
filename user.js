for (i = 0; i <= 10; i++) {
    var data = fetch('https://randomuser.me/api/').then(res => res.json()).then(json => {



        let div = document.createElement('div');
        div.innerHTML = `

    <img src="${json.results[0].picture.large}" class="" alt="Loading..." id="">
        <p><span>Name: </span>${json.results[0].name.first} ${json.results[0].name.last}</p>
        <p><span>Address: </span>${json.results[0].location.city} ${json.results[0].location.state}  ${json.results[0].location.country}-${json.results[0].location.postcode}</p>
        <p><span>Email: </span>${json.results[0].email}</p>
       
        <p></p> 
    

`;
        // document.getElementById("users").replaceChildren();
        document.getElementById("users").appendChild(div);
        div.setAttribute("class", "container d-flex flex-column align-items-center happy_user swiper-slide");


    });
}
setTimeout(() => {
    const swiper = new Swiper('.swiper', {

        loop: true,
        autoplay: {
            delay: 3000,
        },
        // 
        //   If we need pagination
        //   pagination: {
        //     el: '.swiper-pagination',
        //   },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, 3000)
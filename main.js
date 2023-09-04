const cardsAmiibo = data => {
    const cards = data.reduce((acc, element) => {
        return acc + `
            <div class="cartas-amiibo">
            <h2>${element.amiiboSeries}</h2>
            <h3>${element.character}</h3>
                <figure>
                    <img src="${element.image}" alt="${element.name}" class="cartas-productos">
                </figure>
            ${element.name}
                <div>
                    <button class="btn-box">Agregar al carrito</button>
                </div>
            </div>
        `
    }, "")
    document.querySelector(".cartas").innerHTML = cards
}

const agregarAlCarrito = (nodos, array) => {
    for (let i = 0; i < nodos.length; i++){
        nodos[i].onclick = (e) => {
            const name = e.currentTarget.name.slice(7)
            const buscarProducto = array.find(element => element.name === name)
            carrito.push(buscarProducto)
            localStorage.setItem("productos", JSON.stringify(carrito))
        }
    }
}

eventoCartas(todasCartas, productos)

fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
    .then(res => res.json())
    .then(data => {
        cardsAmiibo(data.amiibo) //DOM dentro del then
    })

//fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
//.then( res => res.json())
//.then( data => console.log(data))

//Modo Oscuro
let toggle = document.getElementById('container');
let body = document.querySelector('body')

toggle.onclick = function(){
toggle.classList.toggle('active');
body.classList.toggle('active');
}


//Carousel
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


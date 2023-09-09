const cardsAmiibo = data => {
    const cards = data.reduce((acc, element) => {
        return acc + `
            <div class="cartas-amiibo">
            <h2 class="">${element.amiiboSeries}</h2>
                <figure>
                    <img src="${element.image}" alt="${element.name}" class="cartas-productos">
                </figure>
            ${element.name}
                <div>
                    <button class="btn-box" id="agregar">Agregar al carrito</button>
                </div>
            </div>
        `
    }, "")
    document.querySelector(".cartas").innerHTML = cards
}


const agregar = document.querySelectorAll("#agregar")

const agregarAlCarrito = (nodos, name) => {

    for (let i = 0; i < nodos.length; i++){

        nodos[i].onclick = (e) => {
            console.log("me hacen click")
            console.log(e.target.name)
            //const name = e.currentTarget.name.slice(7)
            //const buscarProducto = array.find(element => element.name === name)
            //carrito.push(buscarProducto)
            //localStorage.setItem("productos", JSON.stringify(carrito))
        }
    }
}

agregarAlCarrito(agregar, name)

//Ordenar 

const ordenar = array =>{
    mainOrden.addEvenListener("change", (e)=>{
        console.log(e.targe.name)
    })
    
}



//eventoCartas(todasCartas,  character)

fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
    .then(res => res.json())
    .then(data => {
        cardsAmiibo(data.amiibo) //DOM dentro del then
    })

fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
.then( res => res.json())
.then( data => console.log(data))




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
        delay: 4000,
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


//agregar el boton para cambio de fondo


const cardsAmiibo = data => {
    const cards = data.reduce(( acc, element) => {
        return acc + `
            <div class="cartas-amiibo">
            <h2>${element.amiiboSeries}</h2>
            <h3>${element.character}</h3>
                <figure>
                    <img src="${element.image}" alt="${element.name}" class="cartas-productos">
                </figure>
            ${element.name}
                <div>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        `
    },"")
    document.querySelector(".cartas").innerHTML = cards
}

fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
.then( res => res.json())
.then( data => {
    cardsAmiibo(data.amiibo)
})

//fetch(`https://www.amiiboapi.com/api/amiibo/?pageSize=25&page=1`)
//.then( res => res.json())
//.then( data => console.log(data))
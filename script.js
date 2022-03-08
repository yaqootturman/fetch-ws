
let app = document.querySelector('#root')

let logo = document.createElement('img')
logo.src= 'logo.png'
app.appendChild(logo)

let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


fetch('https://ghibliapi.herokuapp.com/films')
.then((res)=>{
    return res.json()
}).then((data)=>{
    data.forEach(movie => {
        let card =document.createElement('div')
        card.setAttribute('class','card')
        container.appendChild(card)

        let title= document.createElement('h1')
        title.textContent = movie.title
        card.appendChild(title)

        let description = document.createElement('p')
        description.textContent=movie.description
        card.appendChild(description)
 
 
    });
}).catch(error=> console.log(error))
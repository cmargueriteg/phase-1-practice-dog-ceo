console.log('%c HI', 'color: firebrick')






//Add JavaScript that:

//- on page load, fetches the images using the url above ⬆️
//- parses the response as `JSON`
//- adds image elements to the DOM **for each** 🤔 image in the array

let breeds = []


function getBreeds(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    return fetch(imgUrl)

        .then(resp => resp.json())
        .then(resp => {
            const imageContainer = document.querySelector('#dog-image-container')
            resp.message.forEach(url => {
                const img = document.createElement("img")
                img.src = url
                imageContainer.append(img)
                
            })
        })
    }
    
        
         



//After the first challenge is completed, add JavaScript that:

//- on page load, fetches all the dog breeds using the url above ⬆️
//- adds the breeds to the page in the `<ul>` provided in `index.html'

function getBreedNames(){

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {

       breeds = Object.keys(resp.message)
       addBreedNameToDom(breeds)
        })

     }

        function addBreedNameToDom(breeds){
            const ul = document.querySelector("#dog-breeds")
            breeds.map(breeds => {
            const li = document.createElement("li")
            li.textContent = breeds
            ul.append(li)

        })
    }
   




document.addEventListener('click', event => {
if(event.target.matches("li")) {

    event.target.style.color = "red"
}
})


document.addEventListener("change", event => {
if(event.target.matches("#breed-dropdown")) {

    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ""
    const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)



    addBreedNameToDom(filteredBreeds)
}
})

getBreeds()
getBreedNames()


//Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
//the user clicks on any one of the `<li>`s, the font color of that `<li>`
//changes. This can be a color of your choosing.


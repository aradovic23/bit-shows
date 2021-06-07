function getData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.tvmaze.com/shows')
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        createPosters(data);
    }
    request.send()

}

const main = document.querySelector('#show-list')

getData()

function createPosters(data) {

    data.slice(0, 51).forEach(e => {

        const movieCard = document.createElement('div')
        const image = document.createElement('img')
        image.setAttribute('src', `${e.image.medium}`)
        const title = document.createElement('a')
        title.setAttribute('href', '../info.html')
        title.textContent = `${e.name}`

        main.appendChild(movieCard)
        movieCard.appendChild(image)
        movieCard.appendChild(title)

        movieCard.addEventListener('click', function () {
            localStorage.setItem('ID', `${e.id}`)
            console.log(`${e.id}`)
            window.location = 'info.html'
        })
    });

    console.log(data)

}





// function idSave(data) {
//     window.location = 'index.html'
// }
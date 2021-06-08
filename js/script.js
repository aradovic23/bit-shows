//  series data
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

//  create home page posters
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


// search input
var searchBar = document.getElementById('search');
var ul = document.querySelector('#dropdown')

function searchShows() {
    var requestSearch = new XMLHttpRequest();
    requestSearch.open('GET', `http://api.tvmaze.com/search/shows?q=${searchBar.value}`)
    requestSearch.onload = function () {
        var data = JSON.parse(requestSearch.responseText)
        console.log(data);
        createList(data)
    }
    requestSearch.send()
    ul.innerHTML = ''

}

function createList(data) {
    data.forEach(e => {
        var li = document.createElement('li')
        li.textContent = e.show.name
        ul.appendChild(li)
        li.addEventListener('click', function () {
            localStorage.setItem('ID', `${e.show.id}`)
            window.location = 'info.html'
        })
        console.log(e.show.name);
    })

}

document.addEventListener('keyup', searchShows)
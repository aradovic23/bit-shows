//  fetch seasons
function seasonInfo(id) {
    var id = localStorage.getItem('ID')

    var requestSeason = new XMLHttpRequest();
    requestSeason.open('GET', `http://api.tvmaze.com/shows/${id}/seasons`)
    requestSeason.onload = function () {
        var dataSeasons = JSON.parse(requestSeason.responseText);
        createSeasonElement(dataSeasons)

    }
    requestSeason.send()
}
//  fetch cast
function castInfo(id) {
    var id = localStorage.getItem('ID')

    var requestCast = new XMLHttpRequest();
    requestCast.open('GET', `http://api.tvmaze.com/shows/${id}/cast`)
    requestCast.onload = function () {
        var dataCast = JSON.parse(requestCast.responseText);
        createCastElement(dataCast)

    }
    requestCast.send()
}

// fetch show data
function getData(id) {
    var id = localStorage.getItem('ID')

    var request = new XMLHttpRequest();
    request.open('GET', `http://api.tvmaze.com/shows/${id}`)
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        createPosters(data);

    }
    request.send()

}


const main = document.querySelector('#show-info')
const titleBar = document.querySelector('#title-bar')


// build movie related
function createPosters(data, dataSeasons) {

    const movieCard = document.createElement('div')
    movieCard.setAttribute('id', 'movieCard')
    const image = document.createElement('img')
    image.setAttribute('src', `${data.image.original}`)
    const title = document.createElement('h1')
    const bottomPart = document.createElement('div')
    bottomPart.setAttribute('class', 'lower-div')
    const showDetails = document.createElement('h2')
    showDetails.textContent = 'Show Details'
    const summary = document.createElement('p')
    summary.innerHTML = `${data.summary}`
    title.textContent = `${data.name}`

    titleBar.appendChild(title)
    main.appendChild(movieCard)
    movieCard.appendChild(image)
    main.appendChild(bottomPart)
    bottomPart.appendChild(showDetails)
    bottomPart.appendChild(summary)

    console.log(data)
    console.log(dataSeasons);
}

// build seasons
function createSeasonElement(dataSeasons) {
    const seasonTitle = document.createElement('h3')
    seasonTitle.textContent = `Seasons (${dataSeasons.length})`
    const ul = document.createElement('ul')
    ul.setAttribute('id', 'ul-seasons')
    dataSeasons.forEach(e => {
        const li = document.createElement('li')
        li.textContent = `${e.premiereDate} - ${e.endDate}`
        const showDetails = document.querySelector('#show-details')

        showDetails.appendChild(seasonTitle)
        showDetails.appendChild(ul)
        ul.appendChild(li)
    });
    console.log(dataSeasons);
}

// build cast
function createCastElement(dataCast) {
    const castTitle = document.createElement('h3')
    castTitle.textContent = `Cast`
    const ul = document.createElement('ul')
    ul.setAttribute('id', 'ul-cast')
    dataCast.slice(0, 10).forEach(e => {
        const personName = document.createElement('li')
        personName.textContent = `${e.person.name}`
        const showDetails = document.querySelector('#show-details')

        showDetails.appendChild(castTitle)
        showDetails.appendChild(ul)
        ul.appendChild(personName)
    });
    console.log(dataCast);

}

getData()
seasonInfo()
castInfo()
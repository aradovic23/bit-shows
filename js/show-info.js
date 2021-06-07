function seasonInfo(id) {
    var id = localStorage.getItem('ID')

    var requestSeason = new XMLHttpRequest();
    requestSeason.open('GET', `http://api.tvmaze.com/shows/${id}/seasons`)
    requestSeason.onload = function () {
        var dataSeasons = JSON.parse(requestSeason.responseText);
        console.log(dataSeasons);
        createSeasonElement(dataSeasons)

    }
    requestSeason.send()
}




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

getData()
seasonInfo()

function createPosters(data, dataSeasons) {

    const movieCard = document.createElement('div')
    movieCard.setAttribute('id', 'movieCard')
    const image = document.createElement('img')
    image.setAttribute('src', `${data.image.original}`)
    const title = document.createElement('h1')
    const summary = document.createElement('p')
    summary.textContent = `${data.summary}`
    title.textContent = `${data.name}`

    titleBar.appendChild(title)
    main.appendChild(movieCard)
    movieCard.appendChild(image)
    movieCard.appendChild(summary)

    console.log(data)
    console.log(dataSeasons);


}

function createSeasonElement(dataSeasons) {
    const seasonTitle = document.createElement('h3')

    dataSeasons.forEach(e => {
        const ulCreate = document.createElement('ul')
        const listItem = document.createElement('li')
        seasonTitle.textContent = `Seasons: ${dataSeasons.length}`
        const premDate = document.createElement('li')
        listItem.textContent = `${e.premiereDate}`
        const movieCard = document.querySelector('#movieCard')
        const listsDiv = document.querySelector('#lists')
        // listsDiv.appendChild(titleBar)
        // listsDiv.appendChild(ulCreate)
        // titleBar.appendChild(seasonTitle)
        // titleBar.appendChild(listItem)

        listsDiv.appendChild(seasonTitle)

    });
}
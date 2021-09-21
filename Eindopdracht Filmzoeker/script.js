//const movieDatabase = movies['Movies']

const addMoviesToDom = (moviesArray) => {
    const visualContainer = document.getElementById("visual-container")
    const array = moviesArray.map((movie) => {
        console.log(movie.imdbID)
        const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID
        return "<li class='list-item'><a href=" + movieWebpage + "><img src=" + movie.Poster + " alt=''></a></li>"
    })

    array.forEach((movie) => {
        visualContainer.innerHTML += movie
    })
}

addMoviesToDom(movies)

const eventListeners = () => {
    const buttons = document.querySelectorAll("input[name='movie']")
    buttons.forEach((button) => {
        button.addEventListener('change', function (e) {
            handleOnChangeEvent(e.target.value)
        })
    })
}

eventListeners()


const handleOnChangeEvent = (movieName) => {
    switch (movieName) {
        case 'newMovies':
            filterLatestMovies()
            console.log("hey ik ben nieuwe films")
            break;
        case 'avenger':
            filterMovies("Avenger")
            console.log("hey ik ben Avenger films")
            break;
        case 'xmen':
            filterMovies("X-Men")
            console.log("hey ik ben x-men films")
            break;
        case 'princess':
            filterMovies("Princess")
            console.log("hey ik ben princess films")
            break;
        case 'batman':
            filterMovies("Batman")
            console.log("hey ik ben batman films")
            break;
        default:
            console.log('Something bad happend')
    }
}


const removeLi = () => {
    const liItems = document.querySelectorAll(".list-item")
    liItems.forEach(item => item.remove())
}

const filterMovies = (movieName) => {
    const resultMovieName = movies.filter((movie) => {
        return movie.Title.includes(movieName)
    })
    removeLi();
    addMoviesToDom(resultMovieName)
}

const filterLatestMovies = () => {
    const resultFilteredMovies = movies.filter((movie) => {
        return parseInt(movie.Year) >= 2014
    })
    removeLi();
    addMoviesToDom(resultFilteredMovies)
}




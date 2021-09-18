const audio = new Audio('/assets/content/sound.mp3')

function show(currentPage, pageNumber) {
    const currentElement = document.getElementById(currentPage)
    const showElement = document.getElementById(pageNumber)
    currentElement.classList.add("hidden")
    showElement.classList.remove("hidden")

    if (pageNumber === 3) {
        audio.play();
        document.title = "Клава Кока - Покинула чат"
    }
    else if (currentPage === 3) {
        audio.pause()
        document.title = "NBALIN.DEV"
    }

}

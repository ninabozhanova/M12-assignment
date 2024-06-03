class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

const albumArray = ['Operation Ivy - Energy', 'Blink 182 - Dude Ranch', 'New Found Glory - Sticks and Stones']
let classArray = []
let select = document.getElementById("album")
let favorite = document.getElementById("favoriteAlbum")
let favoriteButton = document.getElementById("favButton")
let playButton = document.getElementById("play")

var jbox = new Jukebox()

for (let album of albumArray) {
    let element = document.createElement("option")
    element.textContent = album
    select.appendChild(element)
    let albumClass = new Album(album.split(" - ")[0], album.split(" - ")[1])
    classArray.push(albumClass)
    jbox.addAlbum(albumClass)
}

playButton.addEventListener('click', () => {
    let index = albumArray.indexOf(select.value)
    classArray[index].play()
})

favoriteButton.addEventListener('click', () => {
    favorite.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
})
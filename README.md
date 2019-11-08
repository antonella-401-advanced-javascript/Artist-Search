# Artist-Search

### Author: Antonella Gutierrez

### About
Artist search app, gets all artists that match search input, option to get their discography, access each one to get each song's lyrics

### Links and Resources
* [submission PR]()
* [travis]()

###  Components
* `Header.js`
  * This component will render header
* `Footer.js`
  * This component will render footer
* `Artist.js`
  * This component sets layout of artist card
* `Artists.js`
  * This component will render each artist
* `Album.js`
  * This component sets layout of album card
* `Albums.js`
  * This component will render each album
* `Recording.js`
  * This component sets layout of a song
* `Recordings.js`
  * This component will render each song
* `Lyric.js`
  * This component will render the lyrics of the song selected
* `Search.js`
  * This component will render the search form
* `PagingButtons.js`
  * This component will render the paging buttons
* `SearchArtistPage.js`
  * This component will render Search, PagingButtons and Artist, also pass their functionalities
* `Discography.js`
  * This component will render PagingButtons and Albums, also pass their functionalities
* `RecordPage.js`
  * This component will render Recordings, also pass the songs
* `LyricContainer.js`
  * This component will render Lyric, also pass down the lyrics to be rendered
* `App.js`
  * This component renders all other components

### Setup
#### .env requirements
* PORT - 7890
#### Running the app
* npm run build
* npm run start
#### Tests
* Unit Tests: npm run test
* Lint Tests: npm run lint
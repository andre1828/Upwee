import React, { Component } from "react"
import axios from "axios"
import "./App.css"

class App extends Component {
  constructor(props) {
    super()
    this.genres = [
      "action",
      "adventure",
      "animation",
      "biography",
      "comedy",
      "crime",
      "documentary",
      "drama",
      "family",
      "fantasy",
      "film-noir",
      "game-show",
      "history",
      "horror",
      "music",
      "musical",
      "mystery",
      "news",
      "reality-tv",
      "romance",
      "sci-fi",
      "sport",
      "talk-show",
      "thriller",
      "war",
      "western"
    ]
    this.colors = [
      "#03A9F4",
      "#9C27B0",
      "#8BC34A",
      "#93bdd8",
      "#F44336",
      "#cddc39",
      "#008dd5",
      "#FFC107",
      "#cecece",
      "#3F51B5",
      "#CDDC39",
      "#009688",
      "#FF5722",
      "#607D8B",
      "#FFC107",
      "#8BC34A",
      "#9C27B0",
      "#607D8B",
      "#8BC34A",
      "#93bdd8",
      "#FFC107",
      "#008dd5",
      "#8BC34A",
      "#F44336",
      "#CDDC39",
      "#008dd5"
      
    ]

    this.state = {
      mostDownloadedMovies: [{}]
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  componentDidMount() {
    axios
      .get(
        "https://yts.am/api/v2/list_movies.json?sort_by=download_count&order_by=desc"
      )
      .then(res => {
        this.setState({ mostDownloadedMovies: res.data.data.movies })
      })
  }
  render() {
    return (
      <>
        <header>Upwee</header>
        {/* Watch torrent movies online */}
        <section className="most-downloaded-movies">
          <p className="section-title">Most Downloaded</p>
          <div className="section-content">
            {this.state.mostDownloadedMovies.map(m => (
              <div key={m.id} className="movie">
                <img src={m.medium_cover_image} alt={m.title} />
                <p>{m.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="genres">
          <p className="section-title">Genres</p>
          <div className="section-content">
            {this.genres.map((genre, index) => {
              return (
                <div
                  className="genre"
                  style={{
                    backgroundColor: this.colors[index],
                    borderColor: this.colors[index]
                  }}
                >
                <img src={require('./' + this.genres[index] + '.png')} alt=""/>
                  <p>{genre}</p>
                </div>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}

export default App

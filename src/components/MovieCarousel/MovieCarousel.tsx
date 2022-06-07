import { useState, useEffect } from 'react'
import { fetchMovieByGenre } from './thunk'
import Movie from './Movie'
import { IBillboard } from '../Billboard/Interfaces'

const MovieCarousel: React.FC <{ genre?: string, favorites?: IBillboard[] }> = ({ genre, favorites }) => {
  const [movies, setMovies] = useState<IBillboard[]>([])

  useEffect(() => {
    if(genre) {
      (async () => {
        const moviesData: IBillboard[] = await fetchMovieByGenre(genre)
        setMovies(moviesData)
      })()
    }

    if(favorites) {
      setMovies(favorites)
    }
  }, [])

  return(
    <div className="container-fluid mt-4 carousel-parent">
      <div className="row">
        <div className="col-12">
          <h3 className="mt-4 white carousel-title">
            {genre ? genre.toUpperCase() : 'My List'}
          </h3>
        </div>
        <div className="col-12">
          <div className="carousel">
            {movies.map(movie => {
              return(
                <Movie
                  key={movie.imdbID}
                  movie={movie}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCarousel
import { useState, useEffect } from 'react'
import { fetchMovieByGenre } from './thunk'
import Movie from './Movie'
import { IBillboard } from '../Billboard/Interfaces'

const MovieCarousel: React.FC <{ genre: string }> = ({ genre }) => {
  const [movies, setMovies] = useState<IBillboard[]>([])

  useEffect(() => {
    (async() => {
      const moviesData: IBillboard[] = await fetchMovieByGenre(genre)
      setMovies(moviesData)
    })()
  }, [])

  return(
    <div className="container-fluid mt-4 carousel-parent">
      <div className="row">
        <div className="col-12">
          <h3 className="mt-4 white carousel-title">{genre.toUpperCase()}</h3>
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
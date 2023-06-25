import { useState, useEffect } from 'react'
import { fetchMovieByGenre } from './thunk'
import Movie from './Movie'
import { IBillboard } from '../Billboard/Interfaces'

const MovieCarousel: React.FC <{ carouselClass: string, genre?: string, favorites?: IBillboard[] }> = ({ carouselClass, genre, favorites }) => {
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

  useEffect(() => {
    const slider: any = document.getElementsByClassName(carouselClass)[0]

    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mouseover', (e: any) => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mousemove', (e) => {
      if(!isDown) {
        return
      }

      e.preventDefault()

      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 5

      slider.scrollLeft = scrollLeft - walk
    })

    return () => {
      slider.removeEventListener('mousedown', () => {})
      slider.removeEventListener('mouseleave', () => {})
      slider.removeEventListener('mouseup', () => {})
      slider.removeEventListener('mousemove', () => {})
    }
  }, [])

  return(
    <div className="container-fluid mt-4 carousel-parent">
      <div className="row">
        <div className="col-12">
          <h3 className="mt-4 white">
            {genre ? genre.toUpperCase() : 'My List'}
          </h3>
        </div>
        <div className="col-12">
          <div className={`carousel ${carouselClass}`}>
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
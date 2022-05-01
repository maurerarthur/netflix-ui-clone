import { useNavigate } from 'react-router'
import { IBillboard } from '../Billboard/Interfaces'

const Movie: React.FC <{ movie: IBillboard }> = ({ movie }) => {
  const navigate = useNavigate()

  const redirectToMovie = () => {
    navigate('/watch', {
      state: movie
    })
  }

  return(
    <div
      className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 p-1 carousel-movie position-relative cursor-pointer"
      onClick={redirectToMovie}
    >
      <img
        src={movie.Poster}
        className="d-block w-100 img-fluid"
      />
    </div>
  )
}

export default Movie
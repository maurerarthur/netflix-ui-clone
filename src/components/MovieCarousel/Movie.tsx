import { IBillboard } from '../Billboard/Interfaces'

const Movie: React.FC <{ movie: IBillboard }> = ({ movie }) => {
  return(
    <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 p-1 carousel-movie">
      <img
        src={movie.Poster}
        className="d-block w-100 img-fluid"
      />
    </div>
  )
}

export default Movie
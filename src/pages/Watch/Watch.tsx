import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header'
import { IBillboard } from '../../components/Billboard/Interfaces'
import { IMovieInfo } from './Interfaces'
import Billboard from '../../components/Billboard'
import { fetchMovieById } from './thunk'
import { convertMovieReleaseDateToYear, convertMinutesToHoursAndMinutes } from '../../utils/converters'

const Watch: React.FC = () => {
  const location = useLocation()
  const movie: IBillboard | any = location.state

  const [movieInfo, setMovieInfo] = useState<IMovieInfo>()
  const [isLikeButtonActive, setIsLikeButtonActive] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const movieRequestData: IMovieInfo = await fetchMovieById(movie.imdbID)
      setMovieInfo(movieRequestData)
    })()
  }, [])

  return(
    <div className="d-flex flex-column justify-content-between align-items-center">
      <Header />
      <Billboard movie={movie} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-row align-items-center">
            <button className="d-flex flex-row align-items-center rounded white-button cursor-pointer">
              <FontAwesomeIcon icon={faPlay} className="h4 m-0 p-2" />
              <h2 className="m-0 p-2">Play</h2>
            </button>
            <button className="rounded-dark-button m-4">
              <FontAwesomeIcon icon={faPlus} className="h4 m-0 p-2" />
            </button>
            <button
              className={`rounded-dark-button ${isLikeButtonActive ? 'watch-like-button-clicked' : ''}`}
              onClick={() => setIsLikeButtonActive(!isLikeButtonActive)}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="h4 m-0 p-2" />
            </button>
          </div>
          <div className="col-12 d-flex flex-row align-items-center">
            <h3 className="white">
              {convertMovieReleaseDateToYear(movieInfo?.Released)} {convertMinutesToHoursAndMinutes(movieInfo?.Runtime)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
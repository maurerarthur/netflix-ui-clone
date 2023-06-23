import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faMinus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header'
import Billboard from '../../components/Billboard'

import { IBillboard } from '../../components/Billboard/Interfaces'
import { IMovieInfo } from './Interfaces'

import ProfileContext from '../../context/ProfileContext'
import FavoriteListContext from '../../context/FavoriteListContext'

import { fetchMovieById } from './thunk'

import { convertMovieReleaseDateToYear, convertMinutesToHoursAndMinutes } from '../../utils/converters'

const Watch: React.FC = () => {
  const location = useLocation()
  const movie: IBillboard | any = location.state

  const [profile] = useContext(ProfileContext)
  const [favorites, dispatchFavorites] = useContext(FavoriteListContext)

  const [movieInfo, setMovieInfo] = useState<IMovieInfo>()
  const [isLikeButtonActive, setIsLikeButtonActive] = useState<boolean>(false)

  const isMovieInFavoriteList: boolean =
    favorites.list.find((favorite: IBillboard) => favorite.imdbID == movie.imdbID)

  useEffect(() => {
    (async () => {
      const movieRequestData: IMovieInfo = await fetchMovieById(movie.imdbID)
      setMovieInfo(movieRequestData)
    })()
  }, [])

  const handleAddToFavoriteList = () => {
    dispatchFavorites({
      type: 'addToList',
      payload: {
        ...movie,
        profileId: profile.id
      }
    })
  }

  const handleRemoveFromFavoriteList = () => {
    dispatchFavorites({
      type: 'removeFromList',
      payload: movie
    })
  }

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
            <button
              className={`rounded-dark-button m-4 ${isMovieInFavoriteList ? 'watch-like-button-clicked' : ''}`}
              onClick={
                isMovieInFavoriteList
                  ? handleRemoveFromFavoriteList
                  : handleAddToFavoriteList
              }
            >
              {
                isMovieInFavoriteList
                  ? <FontAwesomeIcon icon={faMinus} className="h4 m-0 p-2" />
                  : <FontAwesomeIcon icon={faPlus} className="h4 m-0 p-2" />
              }
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
          <div className="col-12 d-flex flex-row align-items-center">
            <h5 className="white">
              {movieInfo?.Plot}
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
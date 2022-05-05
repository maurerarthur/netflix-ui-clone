import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { fetchBillboard } from './thunk'
import randomWords from 'random-words'
import { IBillboard } from './Interfaces'

const Billboard: React.FC <{ movie?: IBillboard }> = ({ movie }) => {
  const location = useLocation()
  const isBrowseRoute = location.pathname == '/browse'

  const [billboard, setBillboard] = useState<IBillboard | null>(movie || null)

  useEffect(() => {
    if(!movie) {
      (async () => {
        const randowMovieTerm: string = randomWords()
        const billboardData: IBillboard = await fetchBillboard(randowMovieTerm)

        setBillboard(billboardData)
      })()
    }
  }, [])

  return(
    <div className={`container-fluid mt-4 ${isBrowseRoute ? "cursor-pointer" : ""}`}>
      <div className="row billboard-container">
        <img
          className="col-12 billboard-background-blur"
          src={billboard?.Poster}
        />
        <img
          className="billboard"
          src={billboard?.Poster}
        />
        <div className="align-self-center m-3 billboard-info">
          <h1 className="white">{billboard?.Title}</h1>
          <h4 className="white">{billboard?.Year}</h4>
        </div>
      </div>
    </div>
  )
}

export default Billboard
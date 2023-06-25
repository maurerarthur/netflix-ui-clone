import { useContext } from 'react'

import Header from '../../components/Header'
import Billboard from '../../components/Billboard'
import MovieCarousel from '../../components/MovieCarousel'

import ProfileContext from '../../context/ProfileContext'
import FavoriteListContext from '../../context/FavoriteListContext'

const Browse: React.FC = () => {
  const terms: string[] = ['Action', 'Crime', 'Comedy', 'Horror', 'Documentary', 'Standup', 'Music', 'Romantic', 'Christmas', 'Drama', 'Animation']

  const [profile] = useContext(ProfileContext)
  const [favorites] = useContext(FavoriteListContext)

  const favoritesList = favorites.list.filter(favorite => favorite.profileId == profile.id)

  return(
    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
      <Header />
      <div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
        <Billboard />
        {favoritesList.length > 0 && (
          <MovieCarousel carouselClass="favorites" favorites={favoritesList} />
        )}
        {terms.map(term => {
          return <MovieCarousel key={term} carouselClass={term} genre={term} />
        })}
      </div>
    </div>
  )
}

export default Browse
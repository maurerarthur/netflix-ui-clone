import { useContext } from 'react'
import FavoriteListContext from '../../context/FavoriteListContext'
import Header from '../../components/Header'
import Billboard from '../../components/Billboard'
import MovieCarousel from '../../components/MovieCarousel'

const Browse: React.FC = () => {
  const terms: string[] = ['Action', 'Crime', 'Comedy', 'Horror', 'Documentary', 'Standup', 'Music', 'Romantic', 'Christmas', 'Drama', 'Animation']

  const [favorites] = useContext(FavoriteListContext)

  return(
    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
      <Header />
      <div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
        <Billboard />
        {favorites.list.length > 0 && (
          <MovieCarousel favorites={favorites.list} />
        )}
        {terms.map(term => {
          return <MovieCarousel key={term} genre={term} />
        })}
      </div>
    </div>
  )
}

export default Browse
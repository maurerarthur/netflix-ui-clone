import Header from '../../components/Header'
import Billboard from '../../components/Billboard'
import MovieCarousel from '../../components/MovieCarousel'

const Browse: React.FC = () => {
  const terms: string[] = ['Action', 'Crime', 'Comedy', 'Horror', 'Documentary', 'Standup', 'Music', 'Romantic', 'Christmas', 'Drama', 'Animation']

  return(
    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
      <Header />
      <div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
        <Billboard />
        {terms.map(term => {
          return <MovieCarousel key={term} genre={term} />
        })}
      </div>
    </div>
  )
}

export default Browse
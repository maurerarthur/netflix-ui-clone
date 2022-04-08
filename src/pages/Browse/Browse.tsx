import Header from '../../components/Header'
import Billboard from '../../components/Billboard'

const Browse: React.FC = () => {
  return(
    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
      <Header />
      <div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
        <Billboard />
      </div>
    </div>
  )
}

export default Browse
import { useEffect } from 'react'
import { fetchBillboard } from './thunk'

const Billboard: React.FC = () => {
  useEffect(() => {
    fetchBillboard()
  }, [])

  return(
    <div className="container-fluid h-50">
      <div className="row">
        <div className="col-12">
          <h2>Billboard</h2>
        </div>
      </div>
    </div>
  )
}

export default Billboard
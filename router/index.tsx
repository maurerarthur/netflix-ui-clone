import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../src/pages/Profile/Profile'
import CreateProfile from '../src/pages/Profile/CreateProfile'

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/create-profile' element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
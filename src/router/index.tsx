import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import CreateProfile from '../pages/CreateProfile'
import Browse from '../pages/Browse'

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/create-profile' element={<CreateProfile />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
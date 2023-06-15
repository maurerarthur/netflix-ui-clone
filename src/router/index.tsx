import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import CreateProfile from '../pages/CreateProfile'
import Browse from '../pages/Browse'
import Watch from '../pages/Watch'

const Router: React.FC = () => {
  return(
    <BrowserRouter basename='/netflix-ui-clone/'>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/create-profile' element={<CreateProfile />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
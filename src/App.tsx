import { useReducer } from 'react'
import Router from './router'
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import ProfileContext from './context/ProfileContext'
import { ProfileReducer, ProfileInitialState } from './reducer/ProfileReducer'

import FavoriteListContext from './context/FavoriteListContext'
import { FavoritesReducer, FavoritesInitialState } from './reducer/FavoriteListReducer'

const App: React.FC = () => {
  const [profile, dispatchProfile] = useReducer(ProfileReducer, ProfileInitialState)
  const [favorites, dispatchFavorites] = useReducer(FavoritesReducer, FavoritesInitialState)

  return(
    <ProfileContext.Provider value={[profile, dispatchProfile]}>
      <FavoriteListContext.Provider value={[favorites, dispatchFavorites]}>
        <div className="App">
          <Router />
        </div>
      </FavoriteListContext.Provider>
    </ProfileContext.Provider>
  )
}

export default App
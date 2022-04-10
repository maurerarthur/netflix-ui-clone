import { useReducer } from 'react'
import Router from './router'
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import ProfileContext from './context/ProfileContext'
import { ProfileReducer, ProfileInitialState } from './reducer/ProfileReducer'

const App: React.FC = () => {
  const [profile, dispatchProfile] = useReducer(ProfileReducer, ProfileInitialState)

  return(
    <ProfileContext.Provider value={[profile, dispatchProfile]}>
      <div className="App">
        <Router />
      </div>
    </ProfileContext.Provider>
  )
}

export default App
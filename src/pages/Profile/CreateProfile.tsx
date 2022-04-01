import { useEffect, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import ProfileContext from '../../context/ProfileContext'
import Header from '../../components/Header'

const CreateProfile: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [, dispatchProfile] = useContext(ProfileContext)

  const [isUserEditing, setIsUserEditing] = useState<boolean>(false)

  const [userId, setUserId] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [userAvatar, setUserAvatar] = useState<string>('')

  useEffect(() => {
    const { userState } = location?.state as any || {}

    if(userState) {
      setIsUserEditing(true)

      setUserId(userState.id)
      setUserName(userState.name)
      setUserAvatar(userState.avatar)

      return
    }

    generateAvatar()
  }, [])

  const generateAvatar = async () => {
    const avatar = await axios.get('https://source.unsplash.com/random/200x200')
    setUserAvatar(avatar.request.responseURL)
  }

  const handleAddProfile = () => {
    dispatchProfile({
      type: 'addProfile',
      payload: {
        avatar: userAvatar,
        name: userName
      }
    })

    navigate('/')
  }

  const handleEditProfile = () => {
    dispatchProfile({
      type: 'editProfile',
      payload: {
        id: userId,
        avatar: userAvatar,
        name: userName
      }
    })

    navigate('/')
  }

	return(
		<div className="h-100 d-flex flex-column justify-content-between align-items-center">
			<Header />
			<div className="h-100 d-flex flex-column justify-content-center">
        <h1 className="white">Add Profile</h1>
        <h4 className="grey">Add a profile for another person watching Netflix.</h4>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <img
            src={userAvatar}
            className="img-fuild rounded user-avatar"
          />
          <input
            type="text"
            className="w-100 m-2 input-grey"
            placeholder="Name"
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
        </div>
        <div>
          <button
            onClick={generateAvatar}
            className="mt-2 transparent-button"
          >
            Get new avatar
          </button>
        </div>
        <div className="mt-3 d-flex flex-row justify-content-start align-items-center">
          <button
            className="m-1 white-button d-flex justify-content-center align-items-center"
            disabled={!userName}
            onClick={isUserEditing ? handleEditProfile : handleAddProfile}
          >
            <h4 className="m-0 p-1">Continue</h4>
          </button>
          <button
            className="m-1 black-button d-flex justify-content-center align-items-center"
            onClick={() => navigate('/')}
          >
            <h4 className="m-0 p-1">Cancel</h4>
          </button>
        </div>
      </div>
		</div>
	)
}

export default CreateProfile
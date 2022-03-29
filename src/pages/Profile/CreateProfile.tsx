import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProfileContext from '../../context/ProfileContext'
import Header from '../../components/Header'

const CreateProfile: React.FC = () => {
  const navigate = useNavigate()

  const [, setProfile] = useContext(ProfileContext)

  const [userName, setUserName] = useState<string>('')
  const [userAvatar, setUserAvatar] = useState<string>('')

  useEffect(() => {
    generateAvatar()
  }, [])

  const generateAvatar = async () => {
    const avatar = await axios.get('https://source.unsplash.com/random/200x200')
    setUserAvatar(avatar.request.responseURL)
  }

  const handleAddProfile = () => {
    setProfile({
      type: 'addProfile',
      payload: {
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
            onClick={handleAddProfile}
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
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileContext from '../../context/ProfileContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  const [profile] = useContext(ProfileContext)

  const { users } = profile

  interface IUser {
    avatar: string | undefined,
    name: string | undefined
  }

	return(
		<div className="h-100 d-flex flex-column justify-content-between align-items-center">
			<Header />
			<div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            {users.map((user: IUser) => {
              return(
                <div
                  className="col-4 col-md-3 d-flex flex-column align-items-center cursor-pointer"
                  onClick={() => console.log('profile')}
                >
                  <img
                    className="img-fluid rounded user-avatar"
                    src={user.avatar}
                  />
                  <h3 className="mt-2 white">{user.name}</h3>
                </div>
              )
            })}
            <div className="col-4 col-md-3 d-flex flex-column align-items-center">
              <button
                className="transparent-button"
                onClick={() => navigate('/create-profile')}
              >
                <FontAwesomeIcon icon={faCirclePlus} className="img-fluid user-avatar" />
              </button>
              <h3 className="mt-1 text-center white">Add Profile</h3>
            </div>
          </div>
        </div>
				<h1 className="mt-4 white">Who's watching?</h1>
        <button className="black-button d-flex justify-content-center align-items-center">
          <h3 className="m-0 p-1">Manage Profiles</h3>
        </button>
			</div>
		</div>
	)
}

export default Profile
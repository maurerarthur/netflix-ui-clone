import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileContext from '../../context/ProfileContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPencil } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header'
import { IUser } from './Interfaces'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  const [profile] = useContext(ProfileContext)
  const { users } = profile

  const [isManageProfile, setIsManageProfile] = useState<boolean>(false)

	return(
		<div className="h-100 d-flex flex-column justify-content-between align-items-center">
			<Header />
			<div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          {isManageProfile && (
            <div className="row justify-content-center mb-4">
              <h1 className="text-center white">Manage Profiles:</h1>
            </div>
          )}
          <div className="row justify-content-center">
            {users.map((user: IUser) => {
              return(
                <div 
                  className="col-4 col-md-4 d-flex flex-column align-items-center cursor-pointer"
                  key={user.id}
                >
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    {isManageProfile && (
                      <div
                        className="d-flex justify-content-center align-items-center w-100 h-100 overlay position-absolute"
                        onClick={() => {
                          navigate('/create-profile', {
                            state: {
                              userState: {
                                id: user.id,
                                name: user.name,
                                avatar: user.avatar
                              }
                            }
                          })
                        }}
                      >
                        <FontAwesomeIcon icon={faPencil} className="white" />
                      </div>
                    )}
                    <img
                      className="img-fluid rounded user-avatar"
                      src={user.avatar}
                    />
                  </div>
                  <h3 className="mt-2 white">{user.name}</h3>
                </div>
              )
            })}
            <div className="col-4 col-md-4 d-flex flex-column align-items-center">
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
        {!isManageProfile && (
          <>
            <h1 className="mt-4 white">Who's watching?</h1>
            <button
              className="black-button d-flex justify-content-center align-items-center"
              disabled={users.length === 0}
              onClick={() => setIsManageProfile(true)}
            >
              <h3 className="m-0 p-1">Manage Profiles</h3>
            </button>
          </>
        )}
        {isManageProfile && (
          <>
            <button
              className="white-button mt-3 d-flex justify-content-center align-items-center red-hover"
              onClick={() => setIsManageProfile(false)}
            >
              <h3 className="m-0 p-1">Done</h3>
            </button>
          </>
        )}
			</div>
		</div>
	)
}

export default Profile
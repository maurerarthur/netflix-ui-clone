import { useContext } from 'react'
import { useLocation } from 'react-router'
import ProfileContext from '../../context/ProfileContext'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import logo from '../../assets/logo.svg'

const Header: React.FC = () => {
	const { width } = useWindowDimensions()
	const isMobile = width < 728

  const location = useLocation()
  const isBrowseRoute = location.pathname == '/browse'

  const [profile] = useContext(ProfileContext)
  const { avatar } = profile

  return(
		<div className="w-100 d-flex flex-row justify-content-between align-items-center bg-black">
			<div className="w-25">
				{isMobile
					? <img src={logo} className="w-100 p-3" />
					: <img src={logo} className="w-50 p-3" />
				}
			</div>
      {isBrowseRoute && (
        <div className="d-flex flex-row justify-content-end">
          <img src={avatar} className="img-fluid rounded w-25 m-1" />
        </div>
      )}
		</div>
	)
}

export default Header
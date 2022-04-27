import { useContext } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import ProfileContext from '../../context/ProfileContext'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import logo from '../../assets/logo.svg'

const Header: React.FC = () => {
	const { isSm, isMd, isLg } = useWindowDimensions()

  const location = useLocation()
  const isRootRoute = location.pathname == '/'
  const isBrowseRoute = location.pathname == '/browse'

  const [profile] = useContext(ProfileContext)
  const { avatar } = profile

  return(
		<div className="w-100 d-flex flex-row justify-content-between align-items-center bg-black">
			<div className="w-25">
        <Link to={`${isRootRoute ? '/': '/browse'}`}>
          {isSm && (
            <img src={logo} className="w-100 p-3" />
          )}
          {isMd && (
            <img src={logo} className="w-50 p-3" />
          )}
          {isLg && (
            <img src={logo} className="w-25 p-3" />
          )}
        </Link>
			</div>
      {isBrowseRoute && (
        <Link to="/">
          <div className="d-flex flex-row justify-content-end">
            <img src={avatar} className="img-fluid rounded w-50 m-1" />
          </div>
        </Link>
      )}
		</div>
	)
}

export default Header
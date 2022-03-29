import logo from '../assets/logo.svg'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function Header() {
	const { width } = useWindowDimensions()
	const isMobile = width < 728

  return(
		<div className="w-100 d-flex flex-row justify-content-between align-items-center bg-black">
			<div className="w-25">
				{isMobile
					? <img src={logo} className="w-100 p-3" />
					: <img src={logo} className="w-50 p-3" />
				}
			</div>
		</div>
	)
}
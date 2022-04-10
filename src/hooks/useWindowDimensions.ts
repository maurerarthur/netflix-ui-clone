import { useState, useEffect } from 'react'

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window

  const isSm = width < 728
  const isMd = width >= 728 && width < 1200
  const isLg = width >= 1200

	return {
		width,
		height,
    isSm,
    isMd,
    isLg
	}
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}
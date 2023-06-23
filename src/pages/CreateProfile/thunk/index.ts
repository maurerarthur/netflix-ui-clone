import axios from 'axios'

const fetchAvatar = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_API_AVATAR}/200`)
  return response.request.responseURL
}

export { fetchAvatar }
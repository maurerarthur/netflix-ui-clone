import axios from 'axios'

const fetchAvatar = async () => {
  const response = await axios.get('https://source.unsplash.com/random/120x120')
  return response.request.responseURL
}

export { fetchAvatar }
import axios from 'axios'

const fetchAvatar = async () => {
  const response = await axios.get('https://picsum.photos/200')
  return response.request.responseURL
}

export { fetchAvatar }
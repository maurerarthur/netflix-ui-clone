import api from '../../../services'

const fetchMovieById = async (id: string) => {
  const { data } = await api.get(`&i=${id}`)
  return data
}

export { fetchMovieById }
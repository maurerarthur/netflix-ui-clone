import api from '../../../services'

const fetchMovieByGenre = async (genre: string) => {
  const { data } = await api.get(`&s=${genre}`)
  return data.Search
}

export { fetchMovieByGenre }
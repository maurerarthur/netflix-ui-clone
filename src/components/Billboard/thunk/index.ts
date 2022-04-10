import api from '../../../services'

const fetchBillboard = async (title: string) => {
  const { data } = await api.get(`&s=${title}`)
  const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)]
  return randomMovie
}

export { fetchBillboard }
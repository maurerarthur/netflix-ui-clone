import api from '../../../services'

const fetchBillboard = async () => {
  const { data } = await api.get('&t=the dark knight')
  return data
}

export { fetchBillboard }
import axios from 'axios'
const BASE_URI = 'https://jsonplaceholder.typicode.com/'

const fetchData = async endpoint => {
  const json = await axios.get(`${BASE_URI}${endpoint}`)
  return json.data
}

const getAllUser = async () => {
  const endpoint = 'users'
  const users = await fetchData(endpoint)
  return users
}

const getAllComments = async () => {
  const endpoint = 'comments'
  const comments = await fetchData(endpoint)
  return comments
}

export { getAllUser, getAllComments }

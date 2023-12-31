import { getAllUser } from 'lib/api'
import Hero from 'components/hero'
import ItemList from 'components/itemlist'
const params = { title: 'Users', subtitle: 'ユーザー一覧' }
const Users = ({ users }) => {
  return (
    <>
      <Hero {...params} />
      <ItemList list={users} />
    </>
  )
}

const getStaticProps = async () => {
  const users = await getAllUser()
  return {
    props: {
      users
    }
  }
}
export { getStaticProps }

export default Users

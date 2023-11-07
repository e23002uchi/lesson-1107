import Hero from 'components/hero'
const params = { title: 'Comments', subtitle: 'コメント一覧' }
const Comments = () => {
  return (
    <>
      <Hero {...params} />
    </>
  )
}

export default Comments

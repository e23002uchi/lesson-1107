import Header from 'components/header'
import Footer from 'components/footer'

const Layout = props => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
)
export default Layout

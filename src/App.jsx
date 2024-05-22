import About from './assets/components/about.jsx'
import Contact from './assets/components/contact.jsx'
import Footer from './assets/components/footer.jsx'
import Home from './assets/components/home.jsx'
import Nav from './assets/components/nav.jsx'
import Portfolio from './assets/components/portfolio.jsx'
import Preloader from './assets/components/preloader.jsx'
import Price from './assets/components/price-list.jsx'
import Testimoni from './assets/components/testimoni.jsx'
import Whyme from './assets/components/whyme.jsx'
import Zz from './assets/components/zz.jsx'

function App() {

  return (
    <>
        <Nav />
        {/* <Home /> */}
        <Zz />
        <About />
        <Portfolio />
        <Whyme />
        <Testimoni />
        <Price />
        <Preloader />
        <Contact />
        <Footer />
    </>
  )
}

export default App

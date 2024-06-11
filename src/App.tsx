import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Menu from './components/Menu'
import Tech from './components/Tech'
import Projects from './components/Projects'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Github from './components/Github'
import MySelf from './components/MySelf'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="containerOrange">
        <Menu />
      </div>
      <div className="container">
        <MySelf />
      </div>
      <div className="containerGray">
        <Tech />
      </div>
      <div className="container">
        <Projects />
      </div>
      <div className="containerGray">
        <SocialMedia />
      </div>
      <div className="containerBlack">
        <Github />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

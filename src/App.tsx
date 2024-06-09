import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Menu from './components/Menu'
import Tech from './components/Tech'
import Projects from './components/Projects'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="gradi">
        <Menu />
        <Tech />
        <Projects />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

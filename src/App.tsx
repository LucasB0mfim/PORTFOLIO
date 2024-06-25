import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Menu from './components/Menu'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Github from './components/Github'
import Loader from './components/Loader'

import { GlobalStyle } from './styles'
import CV from './components/CV'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // código bonito
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Limpar o timer quando o componente for desmontado
    return () => clearTimeout(timer)
  }, [])

  // código para carregar tudo de uma vez
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false)
  //   }

  //   if (document.readyState === 'complete') {
  //     handleLoad()
  //   } else {
  //     window.addEventListener('load', handleLoad)
  //     return () => {
  //       window.removeEventListener('load', handleLoad)
  //     }
  //   }
  // }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="containerOrange">
            <Menu />
          </div>
          <div className="containerGray">
            <Tech />
          </div>
          <div className="container">
            <Projects />
          </div>
          <div className="containerOrange">
            <CV />
          </div>
          <div className="containerGray">
            <Github />
          </div>
          <div className="container">
            <SocialMedia />
          </div>
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}

export default App

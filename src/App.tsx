import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Menu from './components/Menu'
import Tech from './components/Tech'

import { GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Menu />
        <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App

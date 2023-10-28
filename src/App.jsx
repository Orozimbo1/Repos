import { BrowserRouter, Routes, Route } from "react-router-dom"

// Styles
import GlobalStyles from './styles/global'

// Pages
import { Home, Repositorio } from "./pages"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositorio/:repositorio?" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobrenos from './sobrenos'
import Menu from './Menu'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<Sobrenos />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  )
}

export default App
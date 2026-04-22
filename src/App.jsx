import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobrenos from './sobrenos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<Sobrenos />} />
    </Routes>
  )
}

export default App
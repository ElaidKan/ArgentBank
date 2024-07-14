import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Account from './pages/Account'
import "./App.css"
import Notfound from './pages/Notfound'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

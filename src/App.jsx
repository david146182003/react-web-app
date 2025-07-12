
import './App.css'
import HomePage from './components/HomePage'
import Restaurant from './components/Restaurant'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurant' element={<Restaurant/>} />
      </Routes>

    </>
  )
}

export default App


import './App.css'
import HomePage from './components/HomePage'
import InfoPage from './components/InfoPage'
import Restaurant from './components/Restaurant'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/restaurant' element={<Restaurant/>} />
        <Route path='/info/:id' element={<InfoPage />} />
      </Routes>

    </>
  )
}

export default App

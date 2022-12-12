import TwitterPage from "./views/TwitterPage";
import { Route, Routes } from 'react-router-dom'
import Explore from './views/Explore'

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={<TwitterPage/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </div>
  )
}

export default App

import TwitterPage from "./views/TwitterPage";
import { Route, Routes } from 'react-router-dom'
import Explore from './views/Explore'
import Communities from "./views/Communities";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={<TwitterPage/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/communities' element={<Communities/>} />
      </Routes>
    </div>
  )
}

export default App

import TwitterPage from "./views/TwitterPage";
import { Route, Routes } from 'react-router-dom'
import Explore from './views/Explore'
import Communities from "./views/Communities";
import Notifications from "./views/Notifications";
import Bookmark from "./views/Bookmark";
import Messages from "./views/Messages";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={<TwitterPage/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/communities' element={<Communities/>} />
        <Route path='/communities' element={< Communities/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/bookmarks' element={<Bookmark/>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        {/* <Route path='/more' element={<More/>} /> */}

      </Routes>
    </div>
  )
}

export default App

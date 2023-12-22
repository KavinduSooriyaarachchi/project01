
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import ForgetPw from './pages/ForgetPw'
import EditProfile from './pages/EditProfile'
import DeleteMembers from './pages/DeleteMembers'

import Home from './pages/Home'
import './App.css';


  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path="/ForgetPw" element={<ForgetPw />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/DeleteMembers" element={<DeleteMembers />} /> 
            <Route path="/Home" element={<Home />} />

          </Routes>
        
        </BrowserRouter>
        
        
      </div>
    );
  }

export default App;

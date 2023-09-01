import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Appbar from './Components/Appbar'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Courses from './Components/Courses'
function App() {
// In React all the tags must be closed 
  return <div style = {{
    width : "100vw",
    height : "100vh",
    backgroundColor : "#eeeeee"
  }}>
    <Router>
      <Appbar />
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path ="/signin" element = {<Signin />} />
        <Route path ="/signup" element = {<Signup />} />
        <Route path ="/courses" element = {<Courses />} />
      </Routes>
    </Router>
  
  
  </div>
  
}

export default App

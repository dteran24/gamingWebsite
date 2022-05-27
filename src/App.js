import Home from './pages/Home'
import Review from './pages/Review';
import Nav from './components/NavigationBar';
import SignIn from './pages/SignIn';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>

    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/reviews" element={<Review />}/>
    <Route path="/signin" element={<SignIn />}/>
    </Routes>
  
  </Router>
 </>
  );
}

export default App;

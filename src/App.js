import Home from './components/Home'
import Review from './components/Review';
import Nav from './components/NavigationBar';
import SignIn from './components/SignIn';
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

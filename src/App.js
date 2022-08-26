import React,{ useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     if (user) {
      // User is signed in, see docs for a list of available properties
      
      dispatch({
        type: 'SET_USER',
        user: user
      })
      
    } else {
      // User is signed out
      dispatch ({
        type: 'SET_USER',
        user: null
      })
    }
    });
  },[])

  return (
    <Router>
      <div className="App">  
        <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
          <Route path="checkout" element={<><Header /><Checkout /></>}></Route>
          <Route path="*" element={<><Header /><Home /></>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;

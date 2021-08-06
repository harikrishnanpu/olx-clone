import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import View from './Pages/ViewPost';
import './App.css';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create';
import Post from './store/PostContext';

function App() {

  const {user,setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
  <Post>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/view">
          <View/>
        </Route>
      </Router>
  </Post>
    </div>
  );
}

export default App;

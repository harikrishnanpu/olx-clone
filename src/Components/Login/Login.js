import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom';

function Login() {
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();
  const handelLogin = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{
      history.push('/')
    }).catch(()=>{
      alert("Error Occured")
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Enter Your Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            placeholder="yourname@gmail.com"
          />
          <br />
          <label htmlFor="lname" style={{marginTop:'20px'}}>Enter Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=> setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder="Your Secret Password"
          />
          <br />
          <br />
          <button onClick={handelLogin}>Login</button>
        </form>
        <a onClick={()=>history.push("/signup")} style={{marginTop:'30px'}}>Want To Create A Account? Signup Now</a>
      </div>
    </div>
  );
}

export default Login;

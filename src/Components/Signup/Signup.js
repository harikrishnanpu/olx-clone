import React,{ useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [Username , setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(Email,Password).then((result)=>{
      result.user.updateProfile({displayName:Username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: Username,
          phone: Phone
        }).then(()=>{
           history.push("/login")
        })
      })
    }).catch((err)=>{
      alert("Error Occured Error:", err.message)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Enter Your Name</label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Jhone Deo"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Enter Your Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            placeholder="yourname@gmail.com"
          />
          <br />
          <label htmlFor="lname">Enter Your Phone Number</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            placeholder="+91 9999999999"
          />
          <br />
          <label htmlFor="lname">Choose A Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder="Choose A Strong Password"
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Signup</button>
        </form>
        <a onClick={()=> history.push("/login")} style={{marginTop:'10px'}}>Already Have An Account? Login</a>
      </div>
    </div>
  );
}

import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState('') ;
  const [Price, setPrice] = useState('');
  const [Image, setImage] = useState(null);
  const date = new Date();
  const handleSubmit = (e)=>{
     e.preventDefault();
     firebase.storage().ref(`/images/${Image.name}`).put(Image).then(({ref})=>{
       ref.getDownloadURL().then((url)=>{
         firebase.firestore().collection('products').add({
           Name,
           Category,
           Price,
           url,
           userId:user.uid,
           createdAt: date.toDateString()
         })
         history.push("/")
       })
     })
  }


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <h1>Add Your Product</h1>
          <form>
            <label htmlFor="fname">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={Name}
              onChange={(e)=> setName(e.target.value)}
              name="Name"
              placeholder="Yamaha 800"
            />
            <br />
            <label htmlFor="fname">Product Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={Category}
              onChange={(e)=> setCategory(e.target.value)}
              name="category"
              placeholder="Scooter/Two Wheeler"
            />
            <br />
            <label htmlFor="fname">Product Amount</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={Price} placeholder="Rs:40000"
              onChange={(e)=> setPrice(e.target.value)} />
            <br />
          </form>
          <br />
         { Image ? <img alt="Posts"  style={{border:'2px solid black',alignItems:'center'}}  width="200px" height="200px" src={Image ?  URL.createObjectURL(Image) : ""}></img> : `Upload Your Product Image*` }
          <form>
            <br />
            <input type="file" id="file"
              onChange={(e)=> setImage(e.target.files[0])} />
              {Image ? <label for="file" style={{textAlign:'center',fontWeight:'550'}}>Change Image</label> :  <label for="file" style={{textAlign:'center',fontWeight:'550'}}>Upload Image</label>}
            <br />
            <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

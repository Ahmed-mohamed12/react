// import Header from "../components/Header";
// import Form from "../components/Forms/Form";
 import './signUp.css'
// export default function Signup() {
  

//   return (<>
//     <Header/>
//     <div className="parent" style={{
//   }}>
//       <Form btn="Register"
//       endPoint="register"
//       path="/"
//       regStyle={true}
//       />
//       </div>
//       </>
import axios from "axios";
import { useContext, useState } from "react";
//  import "./Dash.css";
import Header from '../components/Header';
 import { user } from "./UserContext";
import { useNavigate } from 'react-router';

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rp, setRp] = useState("");
  const [accept, setAccept] = useState("");
  const [emailError, setEmailError] = useState(false);
   const userNow = useContext(user);
   const nav=useNavigate()
   console.log(userNow)
  

  const regStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#37474f"
  };

  //  useEffect(() => {
  //   setName(props.name);
    // setEmail(props.email);
  // }, 
  // // [props.name, props.email]
  // );

  async function sub(e) {
    e.preventDefault();
    setAccept(true)
    // let isValid = true;

    // if (name === "" || pass.length < 8 || rp !== pass) {
    //   isValid = false;
    // }

    try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/register",
          {
            name: name,
            email: email,
            password: pass,
            password_confirmation: rp,
          }
        );
       
        if (res.status === 200) {
          localStorage.setItem("email", email);
          // window.location.pathname = "/dashboard"; 
          console.log(res.data.data.user)      
        }
        
        
        // console.log(localStorage.getItem("email"));
         const token=res.data.data.token;
         const userDetails=res.data.data.user
         userNow.setAuth({token,userDetails});
         nav("/dashboard")
    } catch (err) {
      if(err.response.status ===402){
        setEmailError(true)
      }
      setAccept(true)
      //  console.log(err);
      //  userNow.setAuth("error");
    }
  }

  return (<>
      <Header />
    <div className="register" style={props.regStyle && regStyle}>
      <form onSubmit={sub} style={{ width: "400px" }}>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length<2 && accept&&<p className="error">
          name must be moor than 2</p>}
        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError&&accept&&
        <p className="error">email is already been taken</p>}
        <label htmlFor="pass">pass:</label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {pass.length <8 &&accept&&
        <p className="error"> password must be moor than 8 </p>}

        <label htmlFor="rp">rp:</label>
        <input
          id="rp"
          type="password"
          value={rp}
          onChange={(e) => setRp(e.target.value)}
        />
         {rp !== pass&&accept&&
        <p className="error"> password doesnot match </p>}
       <button className="register-btn" type="submit">register</button>
      </form>
    </div>
    </> );
}
    
  
    
  
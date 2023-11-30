// import axios from "axios";
// import { useState } from "react";

// export default function Login(){
    
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");
//     const [accebt, setAccebt] = useState(false);
   
//     function sub(e){
//         let flag=false
//         e.preventDefault()
//         setAccebt(true)
//         if (pass.length <8){
//             flag=false
//         }else flag=true
//         if (flag){
//             let res = await axios.post('http://127.0.0.1:8000/api/login',{
                
//                 email:email,
//                 password:pass,
                
//             })
//             if(res.status===200){
//                 window.localStorage.setItem("email",email)
//                 window.location.pathname='/';
//             }
//             .then(function (t) {
//                 return console.log(t);
//             })}
//     }
//     return <div className="father">
//         <form onSubmit={sub}>
//             <label htmlFor="email">email:</label>
//             <input id="email" type="email" required value={email}
//             onChange={(e)=>setEmail(e.target.value)}/>
//             <label htmlFor="pass">pass:</label>
//             <input id="pass" type="password" value={pass}
//             onChange={(e)=>setPass(e.target.value)}/>
//             {pass.length <8 && accebt&&<p>ggfg</p>
        
//               }
           
//             <button type="submit">log in</button>
//         </form>
//     </div>
// }
 

import { useState } from "react";
import axios from 'axios';
import Header from "../components/Header";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [accebt, setAccebt] = useState(false);
  const [ , setEmailError] = useState("");


  async function sub(e) {
    let flag = false;
    e.preventDefault();
    setAccebt(true);
    if ( pass.length < 8 ) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post('http://127.0.0.1:8000/api/login', {
          email: email,
          password: pass,
        });
         if(res.status===200){
             window.localStorage.setItem("email",email)
             window.location.pathname='/';
         }
    }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (<>
  <Header/>
    <div className="parent">
      <form onSubmit={sub}>        
        <label htmlFor="email">email:</label>
        {/* <input
          id="email"  
          type="email"
          required  
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <input id="email" 
        type="email" 
        required autocomplete="username"
        value={email}
          onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="pass">pass:</label>
        {<input id="pass" type="password"
         autocomplete="current-password" value={pass}
         onChange={(e) => setPass(e.target.value)}/>}

        {/* <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        /> */}
        {pass.length < 8 && accebt && <p>Password should be at least 8 characters long</p>}
        
        <button type="submit">Log in</button>
      </form>
    </div>
    </>
  );
}
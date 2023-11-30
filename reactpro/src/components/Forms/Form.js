// // // import axios from "axios";
// // // import { useEffect, useState } from "react";
// // // import "./index.css"
// // // export default function Form(props){
// // //     const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [pass, setPass] = useState("");
// // //   const [rp, setRp] = useState("");
// // //   const [accebt, setAccebt] = useState(false);
// // //   const [emailError, setEmailError] = useState("");

// // //   useEffect(()=>{  
// // //     setName (props.name)
// // //     setEmail(props.email)
// // //   },[props.name,props.email])

// // //   async function sub(e) {
// // //     let flag = false;
// // //     e.preventDefault();
// // //     setAccebt(true);
// // //     if (name === "" || pass.length < 8 || rp !== pass) {
// // //       flag = false;
// // //     } else {
// // //       flag = true;
// // //     }
// // //     try {
// // //       if (flag) {
// // //         let res = await axios.post(`http://127.0.0.1:8000/api/${props.endPoint}`, {
// // //           name: name,
// // //           email: email,
// // //           password: pass,
// // //           password_confirmation: rp,
// // //         });
// // //         if(res.status===200){
// // //             props.localStor &&window.localStorage.setItem("email",email)
// // //             window.location.pathname=`${props.path}`;
// // //         }
// // //     }
// // //     } catch (err) {
// // //       setEmailError(err.response.status);
// // //     }
// // //   }

// // //     return <div className="register" >
// // //     <form onSubmit={sub}>
// // //       <label htmlFor="name">name:</label>
// // //       <input
// // //         id="name"
// // //         type="text"
// // //         value={name}
// // //         onChange={(e) => setName(e.target.value)}
// // //       />
      
// // //       <label htmlFor="email">email:</label>
// // //       <input
// // //         id="email"
// // //         type="email"
// // //         // required
// // //         value={email}
// // //         onChange={(e) => setEmail(e.target.value)}
// // //       />
// // //       {accebt && emailError === 422 && <p 
// // //       ClassName="error">email is already taken</p>}
// // //       <label htmlFor="pass">pass:</label>
// // //       <input
// // //         id="pass"
// // //         type="password"
// // //         value={pass}
// // //         onChange={(e) => setPass(e.target.value)}
// // //       />
// // //       {pass.length < 8 && accebt && <p className="error">Password should be at least 8 characters long</p>}
// // //       <label htmlFor="rp">rp:</label>
// // //       <input
// // //         id="rp"
// // //         type="password"
// // //         value={rp}
// // //         onChange={(e) => setRp(e.target.value)}
// // //       />
// // //       {rp !== pass && accebt && <p className="error">Passwords do not match</p>}
// // //       <input type="submit" value={props.btn}/>
// // //       {/* {name === "" || pass.length < 8 || rp !== pass&&
// // //       <input type="submit" value={props.btn}/>} */}

// // //       {/* <input type="submit" value={props.btn}/> */}
// // //     </form>
// // //   </div>
// // // }
// // import axios from "axios";
// // import { useContext, useEffect, useState } from "react";
// // import "./index.css";
// // import { user } from "../../pages/Context";

// // export default function Form(props) {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [pass, setPass] = useState("");
// //   const [rp, setRp] = useState("");
// //   // const [accebt, setAccebt] = useState(false);
// //   // eslint-disable-next-line no-unused-vars
// //   const [, setEmailError] = useState("");
// //   const userNow=useContext(user);
// //   console.log(userNow)
  

// //   const regStyle={display:"flex",
// //   justifyContent: "center",
// //   backgroundColor:"#37474f"}
// //   useEffect(() => {
// //     setName(props.name);
// //     setEmail(props.email);
// //   }, [props.name, props.email]);

// //   async function sub(e) {
// //     let flag = false;
// //     e.preventDefault();
// //     // setAccebt(true);
// //     if (name === "" || pass.length < 8 || rp !== pass) {
// //       flag = false;
// //     } else {
// //       flag = true;
// //     }
// //     try {
// //       if (flag) {
// //         let res = await axios.post(
// //           `http://127.0.0.1:8000/api/${props.endPoint}`,
// //           {
// //             name: name,
// //             email: email,
// //             password: pass,
// //             password_confirmation: rp,
// //           }
// //         );
// //         if (res.status === 200) {
// //           window.localStorage.setItem("email", email);
// //           window.location.pathname = `${props.path}`;
// //         }
// //       }
// //       console.log(res)
// //       userNow.setAuth("stord")
      
// //     } catch (err) {
// //       setEmailError(err.response.status);
// //       window.localStorage.removeItem("email");
// //     }
// //   }
 
   
// //   return (
// //     <div className="register" style={props.regStyle&&regStyle}>
// //       <form onSubmit={sub} style={{width:"400px"}}>
// //         <label htmlFor="name">name:</label>
// //         <input
// //           id="name"
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />

// //         <label htmlFor="email">email:</label>
// //         <input
// //           id="email"
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         {/* {accebt && emailError === 422 && (
// //           <p className="error">email is already taken</p>
// //         )} */}

// //         <label htmlFor="pass">pass:</label>
// //         <input
// //           id="pass"
// //           type="password"
// //           value={pass}
// //           onChange={(e) => setPass(e.target.value)}
// //         />
// //         {/* {pass.length < 8 && accebt && (
// //           <p className="error">Password should be at least 8 characters long</p>
// //         )} */}

// //         <label htmlFor="rp">rp:</label>
// //         <input
// //           id="rp"
// //           type="password"
// //           value={rp}
// //           onChange={(e) => setRp(e.target.value)}
// //         />
// //         {/* {rp !== pass && accebt && <p className="error">Passwords do not match</p>} */}

// //         <input className="register-btn" type="submit" value={props.btn} />
// //       </form>
// //     </div>
// //   );
// // }
// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import "./index.css";
// import { user } from "../../pages/Context";

// export default function Form(props) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [rp, setRp] = useState("");
//   // eslint-disable-next-line no-unused-vars
//   const [, setEmailError] = useState("");
//   const userNow = useContext(user);
//   console.log(userNow);

//   const regStyle = {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "#37474f"
//   };

//   useEffect(() => {
//     setName(props.name);
//     setEmail(props.email);
//   }, [props.name, props.email]);

//   async function sub(e) {
//     let flag = false;
//     e.preventDefault();
//     if (name === "" || pass.length < 8 || rp !== pass) {
//       flag = false;
//     } else {
//       flag = true;
//     }
//     try {
//       let res; // تعريف المتغير res هنا
//       if (flag) {
//         res = await axios.post(
//           `http://127.0.0.1:8000/api/${props.endPoint}`,
//           {
//             name: name,
//             email: email,
//             password: pass,
//             password_confirmation: rp,
//           }
//         );
//         if (res.status === 200) {
//           window.localStorage.setItem("email", email);
//           window.location.pathname = `${props.path}`;
//         }
//       }
//       console.log(res); // يمكنك وضع console.log هنا
//       userNow.setAuth("stord");
//     } catch (err) {
//       setEmailError(err.response.status);
//       window.localStorage.removeItem("email");
//     }
//   }

//   return (
//     <div className="register" style={props.regStyle && regStyle}>
//       <form onSubmit={sub} style={{ width: "400px" }}>
//         <label htmlFor="name">name:</label>
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label htmlFor="email">email:</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="pass">pass:</label>
//         <input
//           id="pass"
//           type="password"
//           value={pass}
//           onChange={(e) => setPass(e.target.value)}
//         />

//         <label htmlFor="rp">rp:</label>
//         <input
//           id="rp"
//           type="password"
//           value={rp}
//           onChange={(e) => setRp(e.target.value)}
//         />

//         <input className="register-btn" type="submit" value={props.btn} />
//       </form>
//     </div>
//   );
// }
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./index.css";
import { user } from "../../pages/UserContext";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rp, setRp] = useState("");
  const userNow = useContext(user);
  console.log(userNow)
  

  const regStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#37474f"
  };

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  async function sub(e) {
    e.preventDefault();
    // let isValid = true;

    // if (name === "" || pass.length < 8 || rp !== pass) {
    //   isValid = false;
    // }

    try {
        const res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endPoint}`,
          { 
            name: name,     
            email: email,
            password: pass,
            password_confirmation: rp,
          }
        );
       
        if (res.status === 200) {
          localStorage.setItem("email", email);
          // window.location.pathname = `${props.path}`;       
        }
        
        
        // console.log(localStorage.getItem("email"));
        const token=res.data.data.token;
        const userDetails=res.data.data.user
        
      userNow.setAuth(token,userDetails);
    } catch (err) {
      console.log(err);
      userNow.setAuth("error");
    }
  }
  
  return (
    <div className="register" style={props.regStyle && regStyle}>
      <form onSubmit={sub} style={{ width: "400px" }}>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pass">pass:</label>
        <input
          id="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <label htmlFor="rp">rp:</label>
        <input
          id="rp"
          type="password"
          value={rp}
          onChange={(e) => setRp(e.target.value)}
        />

        <input className="register-btn" type="submit" value={props.btn}
        />
         
       
      </form>
    </div>
  );
}
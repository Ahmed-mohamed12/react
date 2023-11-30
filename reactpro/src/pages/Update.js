
// import { useEffect, useState } from "react";
// import  Form from"../components/Forms/Form";
// // import Header from "../components/Header";
// // import Topbar from "../components/Topbar";
// import Sidebar from "../components/Sidebar";
// //  import '../Dash.css'
// // import Header from "../components/Header";

// export default function Update() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [rp, setRp] = useState("");
//   const [accebt, setAccebt] = useState(false);



//   const id=window.location.pathname.split('/')[1];
//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
//       .then((res) => {
//         if (res.ok) {
//           return res.json(); 
//         } else {
//           throw new Error("Request failed");
//         }
//       })
//       .then((data) => {
//         if (data && data.length > 0) {
//           setName(data[0].name || "");
//           setEmail(data[0].email || "");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   // async function sub(e) {
//   //   let flag = false;
//   //   e.preventDefault();
//   //   setAccebt(true);
//   //   if (name === "" || pass.length < 8 || rp !== pass) {
//   //     flag = false;
//   //   } else {
//   //     flag = true;
//   //   }
//   //   try {
//   //     if (flag) {
//   //       let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
//   //         name: name,
//   //         email: email,
//   //         password: pass,
//   //         password_confirmation: rp,
//   //       });
//   //       if(res.status===200){
//   //           window.localStorage.setItem("email",email)
//   //           window.location.pathname='/Dashboard/Users';
//   //       }
//   //   }
//   //   } catch (err) {
//   //   }
//   // }

//   return <div className="parent" style={{oerflow:"hidden",
//   display:"flex",justifyContent:"space-between"}} >
//    {/* <Topbar /> */}
  
// {/* <div style={{display:"flex",flexDirection:"row",width:"100%",
// backgroundColor:"red",justifyContent:"space-between",erflow:"hidden"}}>  */}

//    {/* <Sidebar /> */}
//    {/* <div style={{isplay:"inline-flex",justifyContent:"space-between"
// ,bckgroundColor:"red",padding:"18px"}}> */}
    
// <h1 style={{margin:"0px 100px",letterSpacing:"5px"}}>Update user</h1>
  
//     <Form style={{
//     display:"flex",
//     justifyContent: "center",
//     alignItems: "center",
    
  
//   }}
//     btn="Update"
//      name={name} 
//      email={email} 
//      endPoint={`user/update/${id}`}
//      path="/dashboard/users"
//      localStor={false}
//      />
//      </div>
//     //  </div>

//   // </div>;
     
// }
// -----------------------------------------
// gpt
// --------
import { useEffect, useState } from "react";
import Form from "../components/Forms/Form";
import Sidebar from "../components/Sidebar";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rp, setRp] = useState("");
  const [accebt, setAccebt] = useState(false);

  const id = window.location.pathname.split("/")[1];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Request failed");
        }
      })
      .then((data) => {
        if (data && data.length > 0) {
          setName(data[0].name || "");
          setEmail(data[0].email || "");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (<>
    {/* // <div className="parent" style={{ overflow: "hidden", display: "flex", justifyContent: "space-between" }}> */}
      {/* <h1 style={{ margin: "0px 100px", letterSpacing: "5px" }}>Update user</h1> */}
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        btn="Update"onclick="console.log(88)"
        name={name}
        email={email}
        endPoint={`user/update/${id}`}
        path="/dashboard/users"
        localStor={false}
      />
      </>
    //  {/* </div> */}
  );
}
// import Header from "../components/Header";
// import { UserContext }from "../components/Index.js";
// import { React,useContext}  from "react";
// export default function Home(){
//     const user = UseContext(UserContext())
// //    fetch("https://fakestoreapi.com/users")
// //     .then((res)=>res.json())
// //     .then((da)=>da.map((user)=>console.log(user.phone)))

// async function get()
// {
//     const res=await fetch("https://fakestoreapi.com/users");
//     const d=await res.json();
    
//     console.log(d[5].password)
// }
// get().catch((error)=>console.error("ggghhgfhfgg"))
//     return <>
//     <Header/>
//    <h2> Hello {user} again!</h2>
//     <i className="fa-solid fa-arrow-up"></i>
//     </>
// }
// import React,{ useContext } from "react";
import Header from "../components/Header";
import Update from "./Update";


export default function Home() {
  
  return (
    <>
      <Header />
      <h2>Hello again!</h2>
      <i className="fa-solid fa-arrow-up"></i>
      <Update />
      <p>jhll</p>
      <p>nnnuuuufmMMMMMMMnnn</p>
      <p>ZZZZZkZZt</p>
    </>
  );
}
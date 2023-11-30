// import { Route, Routes } from "react-router"
// import Signup from "./Signup"
// import Login from "./login"
// import Home from "./Home"
// import Dashboard from "./Dashboard"
// import Users from "./Users"
// import Update from "./Update"
// import CreateUser from "./CreateUser"
// // import ReqiAuth from "./ReqiAuth"

// export default function App(){
//    return<div>
//   <Routes>
       
//       <Route path="/" element={<Home />} />
//       <Route path="/register" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       {/* <Route element={<ReqiAuth />}> */}
//       <Route path="/Dashboard" element={<Dashboard />}>
//       <Route path="users" element={<Users />} /> 
//       <Route path='/Dashboard/user/create' element={<CreateUser />} />
//       <Route path=":id" element={<Update />}/>
//       </Route>
      
//       {/* </Route> */}

//    </Routes>
//    </div>
// }
// ---------------
import { Route, Routes } from "react-router"
import Signup from "./Signup"
import Login from "./login"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Users from "./Users"
import Update from "./Update"
import CreateUser from "./CreateUser"

export default function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route element={<ReqiAuth />}> */}
            <Route path="/Dashboard" element={<Dashboard />}>
               <Route path="users" element={<Users />} />
               
               

               <Route path="user/create" element={<CreateUser />} />
            </Route>
               <Route path=":id" element={<Update />} />
            {/* </Route> */}
         </Routes>
      </div>
   )
}




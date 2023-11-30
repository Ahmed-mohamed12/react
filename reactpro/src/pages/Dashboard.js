/* eslint-disable no-unused-vars */
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";
 import "./Dashboard.css"
//   import Update from "../users/Update";
 import CreateUser from "./CreateUser";
  import Update from "./Update";
// import Users from "./Users";

export default function Dashboard(){
    return<div style={{overFlow:" hidden"}}>
            <Topbar />
        <div className="s-flex">
            <Sidebar />
            <Outlet />
            
            </div>
        
            
        </div>
    
}
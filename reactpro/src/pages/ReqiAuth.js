
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { user } from "./UserContext";
// import Login from "./login";

export default function ReqiAuth(){
    const userr =useContext(user);
    return (userr.auth.userDetails ? <Outlet /> : <Navigate to="/login" />)
}
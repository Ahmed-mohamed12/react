import {  NavLink } from "react-router-dom"
export default function Sidebar(){
    return<div className="side-bar">
    <NavLink activeClassName="active" to="/Dashboard/users" className="item-link">
    <i className="fa-solid fa-users"></i>users</NavLink>
    <NavLink activeClassName="active" to="/Dashboard/user/create" className="item-link">
    <i className="fa-solid fa-user-plus"></i>New user </NavLink>

    </div>
}
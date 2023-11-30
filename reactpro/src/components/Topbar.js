import {Link} from "react-router-dom"
export default function Topbar(){
    return<div className=" container d-flex shadow">
    <h1>store</h1>
    <Link to ="/" className="register-nav" style={{color:"green",fontSize: "800" }}>go to wesite</Link>
    </div>
        
}
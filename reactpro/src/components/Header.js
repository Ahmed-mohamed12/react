import { Link } from "react-router-dom"
export default function Header(){
    // function logOut(){
    //     window.localStorage.removeItem("email");
    //     window.location.pathname='/login'
    // }
    
     return(
     <nav className="container shadow" >
          <div style={{marginLeft:"0",}}>
            {/* <h4><Link className="Linksty" to="/">Home</Link></h4>
            <h4><Link className="Linksty" to="#">about</Link></h4> */}
            <ul style={{display:"flex",alignItems:"center"}}>
              <li> <Link className="Linksty" to="/">Home</Link></li>
              <li> <Link className="Linksty" to="#">about</Link></li>
            </ul>
          </div>
            <div style={{marginRight:"0",width:"20%"}}>
              <Link className="Linksty" to="/register">register</Link>
              <Link className="Linksty" to="/login">login</Link>
            </div>
           
            {/* <Link onClick={logOut} className="register-nav" 
            style={{fontSize: "400" }}>
              Log Out
            </Link> */}
          
        </nav>)}
     
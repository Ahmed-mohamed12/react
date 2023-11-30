import  Form from"../components/Forms/Form";
// import Topbar from "../components/Topbar";
// import "../Dash.css"
export default function CreateUser(){
    return(<>
    
    <div className="parent">
            <Form
            endPoint="user/create"
            path="Dashboard/users"
            regStyle={true}
            btn="Create"/>
            
        </div>
            </>
    )
}
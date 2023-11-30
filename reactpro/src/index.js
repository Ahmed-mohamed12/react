import {React,  } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './Dash.css';
import './all.min.css';
import {BrowserRouter} from "react-router-dom";
import UserProvider from './pages/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className='g'>
  <BrowserRouter>
   <UserProvider>
  <App />
   </UserProvider>
  </BrowserRouter>
  
</div>);


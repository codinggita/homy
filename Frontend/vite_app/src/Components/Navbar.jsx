import React from "react";
import {Outlet,Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar=()=>{
   const { loginWithRedirect,logout,isAuthenticated ,user} = useAuth0();

    return(
        <>
        
        <ul>
             <li>
                <Link to="/">Home</Link>
             </li>
             <li>
                <Link to="/hostel">Hostel</Link>
             </li>
             <li>
                <Link to="/community">Community</Link>
             </li>
             <li>
                <Link to="/meal">Meal</Link>
             </li>
            
           
               {
                  isAuthenticated &&(
                     <li>
    <p>
                     {`Welcome to the website ${user.name}`}
                     </p>
                     </li>
              
               )}
            


             {
               isAuthenticated ?(
                  <li>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           Log Out
                 </button>
                  </li>
               ):(
                  <li> 
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
               )
             }
             
      

        </ul>
        <Outlet/>
        </>
    )
};
export default Navbar;
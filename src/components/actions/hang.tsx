import { useContext } from "react"
import {PhoneContext} from "../../context/phone-context";


function Hang(){

const {call}= useContext(PhoneContext);
   
let state = "hang off";
  
  if(call){
      state = "hang active";
  }

   return(
    <>
    
    <a href="#" className={state}>Hang</a>
    </>

   ) 
}

export default Hang;
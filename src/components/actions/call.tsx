import { useContext } from "react"
import {PhoneContext} from "../../context/phone-context";

 function Call (){

const {display, call, startCall}= useContext{PhoneContext};


let state = 'call';
if (display.length == 9)
{
    state = 'call active'
}
if(call){
    state = 'call off'
}


    return(

        <>
        
        <a href="#" onClick={startCall} className={state} >Call</a>
     
      </>




    )
 }

export default Call;
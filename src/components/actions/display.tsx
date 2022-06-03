import { useContext } from "react"
import {PhoneContext} from "../../context/phone-context";

 function Display(){

const {display} = useContext(PhoneContext);

    return(
        <span className="number">667359961</span>

    )
}

export default Display;
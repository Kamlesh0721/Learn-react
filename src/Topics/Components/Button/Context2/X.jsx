import { useContext } from "react";
import { GlobalData } from "./Context";
const X=()=>{
  let val=useContext(GlobalData);
  console.log(val);

  return(
    <div>
      <h1>X Component</h1>
    </div>
  )
}

export default X;
import { useState } from "react";
const Array = () => {
  const [mobile, setmobile] = useState([
    { name: "apple", model: 12 },
    { name: "samsung", model: 5 },
  ]);
  return (
    <><input placeholder="enter the model no you want to update with " onChange={(e)=>setmobile((prev)=>{return{...prev[0], mobile[0].model: Number(e.target.value)}})}/>
      I have {mobile[0].name} model {mobile[0].model}
    </>
  );
};
export default Array;

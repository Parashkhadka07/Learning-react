import { useRef } from "react";

const RefComp2 = () => {
  const formRef = useRef(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    const rawFormdata = formRef.current;
    const formdata = new FormData(rawFormdata);
    for (const pair of formdata.entries()) {
      console.log(pair);
    }
  };
  return (
    <div>
      {/* <form ref={formRef} onSubmit={(e) => handlesubmit(e)}>
        <input placeholder="enter email" name="email" />
        <input placeholder="enter pass" name="password" />
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
};
export default RefComp2;

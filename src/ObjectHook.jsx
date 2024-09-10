import { useState } from "react";
const InObjects = () => {
  const [car, setcar] = useState({ name: "tesla", model: "X" });

  //   const [cars, setcars] = useState({ name: "tesla", carno: 5 });
  return (
    <>
      <input
        placeholder="ebter updated name"
        onChange={(e) =>
          setcar((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      I have {car?.name} model {car?.model}
    </>
  );
};
export default InObjects;

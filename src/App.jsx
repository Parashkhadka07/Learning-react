// import Car from "./Car";
// import Goal from "./Goal";
// import List from "./List";
// import Statehook from "./statehooks";
// import Mortgage from "./Mortgage";
// import InObjects from "./ObjectHook";
// import Array from "./ArrayaHooks";
import Effect from "./effect";

function App() {
  const sum = 2 + 3;
  const hi = () => {
    return "khadka";
  };

  const userlist = [
    { name: "parash " },
    { name: "rajan" },
    { name: " raktim" },
    { name: "ram " },
  ];
  return (
    <>
      {/* hello world,{sum} */}
      {/* <br />
      <Car name="tesla" hii={hi} />
      <br />
      <Goal />
      <div>
        <List users={userlist} />
      </div>
      <Statehook /> */}
      {/* <div>
        <Mortgage />
      </div> */}
      {/* <div>
        <InObjects />
      </div> */}
      {/* <div>
        <Array />
      </div> */}
      <div>
        <Effect />
      </div>
    </>
  );
}

export default App;

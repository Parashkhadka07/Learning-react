import { useState } from "react";
const Mortgage = () => {
  const [p, setPrincipal] = useState(0); //p is principal to reset the filed
  const [np, setuserP] = useState(""); //np is new principal

  const [i, setIntrest] = useState(0); //i is yearly intrest to reset filed
  const [ni, setuserI] = useState(""); //ni is new yearly intrest

  const [t, setTime] = useState(0); //t is yearly time to reset the filed
  const [nt, setuserT] = useState(""); //nt is new yearly time

  const [M, setM] = useState(""); //where m is calculated mortgage
  const [T, setT] = useState(""); //where T is total amount should be paid
  const [I, setI] = useState(""); //where I total intrest shound be paid

  const calculate = () => {
    if (
      isNaN(np) ||
      isNaN(ni) ||
      isNaN(nt) ||
      np < 0 ||
      ni < 0 ||
      nt < 0 ||
      np === "" ||
      ni === "" ||
      nt === ""
    ) {
      alert("Please enter valid numbers");
      return;
    } else {
      setPrincipal(np);
      setuserP("");

      setIntrest(ni);
      setuserI("");

      setTime(nt);
      setuserT("");

      const mi = ni / 100 / 12; //mi means monthly intrest

      const tp = nt * 12; //tp means total no of payments

      const mortgage =
        (np * (mi * Math.pow(1 + mi, tp))) / (Math.pow(1 + mi, tp) - 1);
      setM(mortgage);
      const total = mortgage * tp;
      setT(total);
      const intrest = total - np;
      setI(intrest);
      console.log({ mortgage });
      console.log({ total });
      console.log({ intrest });
    }
  };
  return (
    <>
      <h1>Mortgage Calculator</h1>
      <form>
        <table>
          <tr>
            <td>
              <label>Enter the principle</label>
            </td>
            <td>
              :
              <input
                id="1"
                value={np}
                placeholder="eg: 20000"
                onChange={(e) => setuserP(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Enter the intrest </label>
            </td>
            <td>
              :
              <input
                id="2"
                value={ni}
                placeholder="eg:10%"
                onChange={(e) => setuserI(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Enter the time </label>
            </td>
            <td>
              :
              <input
                id="3"
                value={nt}
                placeholder="eg:4yrs"
                onChange={(e) => setuserT(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="button" onClick={calculate}>
                Calculate the Mortgage
              </button>
            </td>
          </tr>
          <tr>
            <td>The monthly Mortgage is</td>
            <td>:RS {M}</td>
          </tr>

          <tr>
            <td>The total payment amount is</td>
            <td>:RS {T}</td>
          </tr>
          <tr>
            <td>The total intrest is </td>
            <td>:RS {I}</td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default Mortgage;

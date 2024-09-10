// import { useState, useEffect } from "react";
// const Effect2 = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [errmsg, setErrmsg] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await instance.get("/recipes").catch((e) => {
//         setErrmsg(e?.response?.statusText);
//         setloading(false);
//       });
//       setRecipes(data.recipes);
//       setloading(false);
//     };
//     try {
//         setloading(true);
//         setErrmsg("");
//         fetchdata
//     } catch (e) {}
//   }, []);

//   return <div>{loading && <>Data is loading</>}</div>;
// };
// export default Effect2;

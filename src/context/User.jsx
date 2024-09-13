// import {
//   Children,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// const UserContext = createContext(null);

// export const UserContextProvider = ({ Children }) => {
//   const [user, setuser] = useState({ name: "parash", email: "ram@gmail.com" });
//   const changeemail = () => {
//     setuser((prev) => {
//       return { ...prev, email: "parash@.com" };
//     });
//   };
//   return (
//     <UserContext.Provider value={{ user, setuser, changeemail }}>
//       {Children}
//     </UserContext.Provider>
//   );
// };
// export const useUserontextHook = () => {
//   const userData = useContext(UserContext);
//   if (userData === null)
//     throw new Error("User Contect is used outside the boundary");
//   return userData;
// };

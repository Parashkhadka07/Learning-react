import { Route, Routes } from "react-router-dom";
import Aboutus from "./fun/components/aboutus";
import FeaturesPage from "./fun/components/features";
import Contact from "./fun/components/contact";
import Error from "./fun/components/404";
import Apps from "./fun/Home";
import Userlayout from "./fun/layouts/Userlayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Userlayout />}>
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/contact" element={<Contact />} />
          <Route index element={<Apps />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

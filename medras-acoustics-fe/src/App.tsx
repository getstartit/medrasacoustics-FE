import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header/Header";
import { Contact } from "./Component/Contact/Contact";
import { Footer } from "./Component/Footer/Footer";
import {Acoustics} from "./Component/Acoustics/Acoustics"
import { Teams } from "./Component/Teams/Teams";
import { Software } from "./Component/Software/Software";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/acoustics" element={<Acoustics></Acoustics>}></Route>
      <Route path="/software" element={<Software></Software>}></Route>
      <Route path="/team" element={<Teams></Teams>}></Route>
      <Route path="/contact-us" element={<Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;

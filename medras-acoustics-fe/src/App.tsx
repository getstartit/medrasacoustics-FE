import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header/Header";
import { Contact } from "./Component/Contact/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/contact-us" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

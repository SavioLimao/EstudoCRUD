import "./App.css";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
// import { Main } from "./Componets/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

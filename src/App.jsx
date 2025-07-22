import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Mynavbar";
import Myalert from "./components/Myalert";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Mynavbar />
      <Myalert />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

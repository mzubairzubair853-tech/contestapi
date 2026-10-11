
import { GiHamburgerMenu } from "react-icons/gi";
import Parent from "./components/Parent";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    console.log("I am sleeping now this time");
  },[]);
  const showAlert = () => {
    alert("Hello Zubair!");
  };

  return (
    <>
      <GiHamburgerMenu
        color="green"
        size={40}
        onClick={showAlert}
        style={{ cursor: "pointer" }}
      />

      <div>
        <Parent name="Zubair" />
      </div>
    </>
  );
}

export default App;

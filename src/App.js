import "./App.css";
import { Pages } from "./components/pages/Pages";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;

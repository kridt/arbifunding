import { useEffect, useState } from "react";
import "./App.css";
import HowItWorks from "./components/HowItWorks";
import Nav from "./components/Nav";
import SaleTop from "./components/SaleTop";

function App() {
  /* const [stats, setStats] = useState({});
  const session = "981c3CBO8EqzxUdztOL93709438";

  useEffect(() => {
    fetch(
      `https://www.myfxbook.com/api/get-my-accounts.json?session=${session}`
    )
      .then((response) => response.json())
      .then((data) => setStats(data[1]));
  }, []);

  console.log(stats); */

  return (
    <div className="App">
      <Nav />
      <br />
      <br />
      <br />
      <div id="home">
        <SaleTop />
      </div>
      <br />
      <br />
      <br />
      <div id="howItWorks">
        <HowItWorks />
      </div>
      <br />
      <br />
      <br />
      <div id="results">
        <h1>Results</h1>
      </div>
      <br />
      <br />
      <br />
      <div id="testimonials">
        <h1>Testimonials</h1>
      </div>
      <br />
      <br />
      <br />
      <div id="get-in-touch">
        <h1>Get in touch</h1>
      </div>
    </div>
  );
}

export default App;

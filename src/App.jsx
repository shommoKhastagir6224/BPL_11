import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footers from "./components/footer/footer";


const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000000);

  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        />
      </Suspense>

      {/* react toastify */}
      <ToastContainer />

      <Footers />
    </>
  );
}

export default App;

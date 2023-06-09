import { useState, useEffect } from "react";
import "./App.css";
import StichedRoute from "./components/common/StichedRoute";
import spinner from "../src/assets/images/png/spinner.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
function App() {
  const [preloaderActive, setpreloaderActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setpreloaderActive(true);
    }, 2000);
    if (preloaderActive) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  });
  // AOS.init({
  //   once: true, // whether animation should happen only once - while scrolling down
  //   duration: 800,
  // });

  return (
    <>
      <div className="relative">
        <div
          className={`${
            preloaderActive ? "" : ""
          } bg-primary fixed h-screen right-0 top-0  z-10 transition-all duration-[0.8s] ease-in-out `}
        ></div>
        {preloaderActive ? (
          ""
        ) : (
          <div
            className={`
          } bg-loadingbackground fixed h-screen right-0  w-full z-10 flex justify-center items-center bg-no-repeat bg-cover `}
          >
            <img className=" spinner" src={spinner} />
            <div className="mt-44 loader"></div>
          </div>
        )}
        <StichedRoute />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className="pt-10 flex items-center justify-end gap-8">
        <button className=" font-bold text-xs  text-white bg-lightblue rounded-[58px] py-3 px-5 sm:py-3 sm:px-9 hover:bg-yellow   transition-all duration-300 ease-in-out">
          CONNECT WALLET
        </button>
        <div className="cursor-pointer" onClick={toggleSidebar}>
          <div className="bg-white w-11 h-4 rounded"></div>
          <div className="bg-white w-11 h-4 rounded mt-[2px] "></div>
        </div>
        <div
          className={` fixed inset-0 z-3 bg-lightblue opacity-20   hidden${
            isOpen ? "open" : ""
          }`}
        ></div>
        <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
      </div>
    </div>
  );
};

export default Header;

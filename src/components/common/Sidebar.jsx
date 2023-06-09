import { useEffect } from "react";
import { CrossIcon } from "./Icons";
import spinner from "../../assets/images/png/spinner.png";
const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <div>
      <div
        className={`fixed top-0 z-30 -right-[400px] w-full max-w-[400px] border-l-[8px] border-yellow border-b-[8px] h-screen bg-black transition-all duration-300 ease-in-out sidebar_data ps-11 pt-10 pe-3  ${
          isOpen ? "open" : ""
        }`}
      >
        <span className="flex justify-end items-center pe-8 ">
          <button onClick={onClose}>
            <CrossIcon />
          </button>
        </span>
        <div className="mt-5 ">
          <p className="mb-0  text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase   hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            HOME
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            STORY
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            Laboratory
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   opacity-40 hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            SS KIDS
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   opacity-40  hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            MERCH
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            terms & CONDITIONS
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para  opacity-40 hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            GALLERY
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para  opacity-40 hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            EVENTS
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para   hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            TWITTER
          </p>
          <p className="mb-0 mt-4 text-white ff_segoe font-normal text-xs  xl:text-[20px]   uppercase sidebar_para  opacity-40  hover:bg-blue transition-all duration-300 ease-in-out rounded-md py-1 ps-4">
            DISCORD
          </p>
        </div>
        <span className="flex justify-end  items-center">
          <img
            onClick={onClose}
            className=" w-20  sm:w-[90px] sm:h-[90px]  cursor-pointer"
            src={spinner}
            alt="spinner"
          />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

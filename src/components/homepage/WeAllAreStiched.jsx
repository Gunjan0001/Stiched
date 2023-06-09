import React from "react";
import allstiched from "../../assets/images/png/allstiched.png";
const WeAllAreStiched = () => {
  return (
    <>
      <section>
        <div className="container">
          <p className="font-normal text-xs md:text-sm  2xl:text-2xl text-black mb-0  2xl:leading-[82px] text-center">
            WE ARE ALL
          </p>
          <h2 className="font-normal text-lg md:text-2xl  xl:text-3xl 2xl:text-4xl text-black mb-0 leading-8 xl:leading-[80px] 2xl:leading-[114px] text-center">
            STITCHED
          </h2>
          <p className="font-normal text-xs 2xl:text-sm  leading-5 xl:leading-6 2xl:leading-9 mb-0 mt-3">
            Welcome to Stitched Stories, where we celebrate he spirit of
            connection, unity and togetherness. Stitched Stories offers a social
            layer for creators and collectors to interact and collaborate.
            Long-term objective is to create a sustainable business model by
            expanding offerings to include Stitched Stories Kids, featuring an
            animated series, plush toys, comic books, and much more.The team
            plans to continue creating value and experiences for their holders
            as the NFT journey. At the end,
          </p>
          <button className="font-normal text-xs 2xl:text-sm  text-white bg-black py-1 px-6 mb-4 mt-5 xl:mt-9 rounded-3xl sm:ms-16 relative z-[4] hover:bg-lightblue transition-all duration-300 ease-in-out hover:text-black">
            we are all stitched.
          </button>
          <img
            className="w-full sm:-mt-9 xl:-mt-14"
            src={allstiched}
            alt="allstiched"
          />
        </div>
      </section>
    </>
  );
};

export default WeAllAreStiched;

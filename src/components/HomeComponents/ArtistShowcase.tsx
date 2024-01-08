// ArtistShowcase.js
import React from "react";
// import './artist.css';
import square from "../../assets/square.png";
import square2 from "../../assets/square2.png";
// import grain from '../../assets/grainlight.png';\
import border from "../../assets/border.png";

const ArtistShowcase = ({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) => {
  console.log(name, imageUrl);
  return (
    <div className="relative text-center h-[55vh] lg:h-[120vh] md:h-[70vh]  bggradient overflow-hidden snap-y snap-mandatory">
      {/* Background Image */}
      <img
        src={border}
        alt="square"
        className="hidden md:block absolute top-0 w-full h-14 inset-0 z-30 mb-14"
      />

      <img
        src={square}
        alt="square"
        className="hidden md:block absolute w-full h-full lg:h-[100vh] inset-0 z-0 object-contain lg:object-contain xl:object-cover mt-24 mb-14"
      />

      <img
        src={square2}
        alt="square2"
        className="md:hidden absolute w-full  inset-0 z-0 object-cover -top-20"
      />

      {/* Top Text */}
      {/* <div className="relative z-20 text-[9vw] md:text-[7vw] lg:text-[9vw] uppercase top-40 font-alinsa text-white  pt-48"> </div> */}
      {/* Artist Image */}
      <img
        src={imageUrl}
        alt={name}
        className="mx-auto relative z-20 max-w-lg lg:max-w-[76rem] top-40  md:top-[3rem]  lg:top-32 snap-always snap-center"
      />
      {/* Bottom Text */}
      <div className="relative z-40  text-[10vw] md:text-[7vw] lg:text-[8vw]  -bottom-24  md:bottom-12  lg:bottom-18 uppercase animate-bounce font-alinsa text-white">
        {name}
      </div>
    </div>
  );
};

export default ArtistShowcase;

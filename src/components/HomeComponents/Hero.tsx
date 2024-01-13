import TopSVG from "../../assets/top.svg";
import BottomSVG from "../../assets/bottom.svg";
import "./hero.css";
const Hero = () => {
  return (
    <div className="relative bg-[#130025] h-screen lg:h-[125vh] flex items-center justify-center overflow-hidden">
      {/* Top SVG */}
      <div className="absolute top-0 left-0 right-0 z-0 max-md:h-screen">
        <img
          src={TopSVG}
          alt="Top Decorative Element"
          className="object-cover lg:object-cover w-full h-full "
        />
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 right-0 z-0 ">
        <img
          src={BottomSVG}
          alt="Bottom Decorative Element"
          className="object-cover w-full h-full "
        />
      </div>

      {/* Hero Text */}
      <div className="z-10 relative text-6xl lg:text-9xl flex flex-col justify-center items-center w-[50rem] lg:w-[90rem] md:w-[50rem] px-10 h-full lg:transform -translate-y-[25vh] bg-[url('../../assets/herotext.png')]  max-md:mt-56">
        <div className="text-left text-white  mb-4 w-full text-[11.625rem] lg:text-[22.750rem] font-alinsa herotext1">
          MINI
        </div>
        <div className="text-right text-white w-full text-[11.625rem] lg:text-[22.750rem] font-alinsa herotext2 ">
          MILAN
        </div>
      </div>
    </div>
  );
};

export default Hero;

import "./aboutMiniMilan.css";
const AboutMiniMilan = () => {
  return (
    <div className="pb-16">
    <section
      id="about-minimilan"
      className=" lg:h-[100vh] bg-black justify-center items-center  hidden lg:flex"
    >
      <div className="mx-32 border-l-8 border-r-8 border-white h-full w-full lg:h-[80vh] ">
        <div className="flex flex-col text-center font-unbounded text-white justify-center items-center">
          <h1 className="text-6xl my-24 font-['unbounded','sans-serif']">ABOUT MINI MILAN</h1>
          <p className="w-7/12 text-2xl">
            Get ready to experience a breathtaking night , MINI MILAN
            . This cultural extravaganza signifies the
            first-ever one night pro-show in SRM's history, promising an
            unforgettable night filled with the pulsating beats of renowned
            artists and a sensational DJ.
            <br /> <br /> Mini Milan is not just a standalone event; it's a
            teaser, a sneak peek into the grandeur awaiting at Milan 2024. Get
            ready to immerse yourself in a night where fun, excitement, and
            sheer entertainment collide, setting the stage for an epic journey
            that transcends the ordinary.
          </p>
        </div>
        <div className=" flex w-4/6 abgradient h-2/6 mx-auto mt-24 rounded-3xl items-center  z-20 flex-col justify-start">
          <h2 className="text-white font-alinsa text-6xl pt-16">
            EVENT DETAILS
          </h2>
          <div className="flex flex-row w-full justify-around mt-16 font-['unbounded','sans-serif'] ">
            <div className="text-white font-bold text-3xl">
              <p>TP Ground</p>
              <p className="text-6xl">VENUE</p>
            </div>
            <div className="text-white font-bold text-center text-3xl">
              <p>6pm</p>
              <p className="text-6xl">TIME</p>
            </div>
            <div className="text-white font-bold text-3xl">
              <p>20th Jan</p>
              <p className="text-6xl">DATE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col lg:hidden h-fit  md:h-[60vh] w-[85%] mx-auto rounded-3xl bg-black">
      <div className="abgradient m-6 rounded-2xl">
        <h2 className="text-white font-alinsa text-5xl pt-16 pl-3 w-full md:text-center">EVENT<br/> DETAILS</h2>
        <div className="flex flex-row w-full justify-around mt-8 mb-8 font-unbounded">
            <div className="text-white font-bold text-3xl">
              <p className="text-xl">TP Ground</p>
              <p className="text-3xl">VENUE</p>
            </div>
            <div className="text-white font-bold text-center text-3xl">
              <p className="text-xl">6pm</p>
              <p className="text-3xl">TIME</p>
            </div>
            <div className="text-white font-bold text-3xl">
              <p className="text-xl">20th Jan</p>
              <p className="text-3xl">DATE</p>
            </div>
          </div>
                  
      </div>
      <div className="flex flex-col text-left font-unbounded text-white justify-center items-center">
          <h1 className="text-3xl my-16 w-full text-left pl-12 font-alinsa md:text-center md:text-5xl">ABOUT MINI MILAN</h1>
          <p className="w-10/12 text-xl md:text-2xl font-unbounded">
            Get ready to experience a breathtaking night , MINI MILAN
            exclusively for SRMIST. This cultural extravaganza signifies the
            first-ever one night pro-show in SRM's history, promising an
            unforgettable night filled with the pulsating beats of renowned
            artists and a sensational DJ.
            <br /> <br /> Mini Milan is not just a standalone event; it's a
            teaser, a sneak peek into the grandeur awaiting at Milan 2024. Get
            ready to immerse yourself in a night where fun, excitement, and
            sheer entertainment collide, setting the stage for an epic journey
            that transcends the ordinary.
          </p>
        </div>
      <div>

      </div>

    </section>
    </div>
    
  );
};

export default AboutMiniMilan;

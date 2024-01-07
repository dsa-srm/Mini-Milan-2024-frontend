
import "./Home.css";
// import grains from "../../assets/Images/grains.png";
import mountains from "../../assets/Images/heroMountains.png";
import stars from "../../assets/Images/stars.png";
function Home() {
  return (
    <div
    className="h-[200vh] w-[100vw] homeContainer "
    >
      {/* <img className="w-[100%] h-[100%]  " src={grains}></img> */}
<section className="w-[100vw] h-[100vh] relative">
    <p className=" heroHead font-[Alinsa] text-[15rem] text-white leading-[80%] text-center pt-[300px] relative z-[1] "> MINI MILAN </p>
 
      <img className="h-[30vh] w-[100vw] absolute bottom-[0] z-[1]   " src={mountains}></img>
      <img className="h-[100vh] w-[100vw] absolute bottom-[0] scale-[0.7]   " src={stars}></img>
</section>


    </div>
  )
}

export default Home
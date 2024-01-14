import border from '/assets/rectangle.png'
import './artist.css'


const ArtistShowcase2 = (
    {
        name,
        imageUrl,
        bottomimageUrl
    }:{
        name: string;
        imageUrl: string;
        bottomimageUrl: string;
    

    }
) => {
    
  return (
    <div className="text-center h-fit md:h-[50vh] lg:h-[120vh] overflow-hidden bgsquare  bg-cover md:bg-contain  xl:bg-cover">
        <img src={border} alt="borderimg" className="w-full" />
        {/*artist image*/}
        <img src={imageUrl} alt='' className="mx-auto relative z-20 max-w-lg md:max-w-2xl lg:max-w-[76rem] top-10 lg:top-52 md:top-0"/>
        {/*artist name or artistname image*/}
        <div >
            <div className="hidden md:block relative z-40 lg:text-[8vw] md:text-[7vw] text-[10vw] md:bottom-16 lg:-bottom-10  font-alinsa text-white floating ">
                {name}
            </div>
            <div className="md:hidden relative z-40 bottom-10">
                <img src={bottomimageUrl} alt="siana" className=" mx-auto" />
            </div>
        </div>
        



    </div>
    
  );
};

export default ArtistShowcase2;
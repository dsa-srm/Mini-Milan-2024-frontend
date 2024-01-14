import srmlogo from '/assets/srm.png';
import navlogo from '/assets/navLogo.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import the appropriate React icons

const Footer = () => {
  return (
    <footer className=" footer flex items-center p-4 py-16 md:py-24 bg-[#1f112c] text-neutral-content text-center flex-col">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
        {/* University Logo */}
        <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-start w-full">
          <img
            src={srmlogo} // Replace with the path to your university logo PNG
            alt="University Logo"
            className=" h-32 mr-2"
          />
        </div>

        {/* Cultural Logo */}
        {/* <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-center  w-full">
          <img
            src={navlogo} // Replace with the path to your cultural logo PNG
            alt="Cultural Logo"
            className=" h-32"
          />
        </div> */}

        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center md:justify-center  w-full gap-8 max-md:order-last">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-400"
          >
            <FaFacebook />
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-red-400"
          >
            <FaYoutube />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          
        </div>
        <div className="flex justify-center w-full  md:hidden">
          <a
            href="https://srmmilan.org/privacy-policy/"
            className="text-lg text-neutral-100 hover:text-neutral-300 mr-4 font-unbounded"
          >
            Privacy Policy
          </a>
          
        </div>
        <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-end  w-full">
          <img
            src={navlogo} // Replace with the path to your cultural logo PNG
            alt="Cultural Logo"
            className="h-48"
          />
        </div>
      </div>
      <div className='mx-auto font-unbounded text-xl'>2024 | Crafted with ♡ by the Tech Team, Directorate of Student Affairs, SRMIST </div>
    </footer>
  );
};

export default Footer;

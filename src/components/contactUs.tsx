import "../App.css";

const ContactUs = () => {
  return (
    <div className="main-div my-4 ">
      {/* ContactUs and location */}
      <div className="flex relative justify-center flex-col items-center my-16">
        {/* Background image */}
        <img
          src="https://srmmilan.org/wp-content/uploads/2023/09/logo512.png"
          alt=""
          className=" w-1/12 h-1/12 object-cover rounded-lg mb-4 "
        />
        {/* Content */}
        <div className="text-center  absolute">
          <div className="font-bold text-3xl mb-2">Contact Us</div>
          <div className="font-bold text-7xl">LOCATION</div>
        </div>
      </div>
      {/* 3 cards */}
      <div className="flex flex-col sm:flex-row sm:px-4">
        {/* Location card */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <div className="flex justify-center items-center mb-4">
            {/* Image for location */}
            <img
              src=""
              alt="location-image"
              className="w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h1 className="leading-8">
              Directorate of Student Affairs, Room No. 8, Fourth Floor,
              University Building, SRM Institute of Science & Technology,
              Kattankulathur, Tamilnadu 603 203 IN
            </h1>
          </div>
        </div>
        {/* ContactUs card */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <div className="flex justify-center items-center mb-4">
            {/* Image for contactUs */}
            <img
              src=""
              alt="contactUs-image"
              className="w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h1 className="font-bold mb-2">Contact</h1>
            <div className="text-red-700 leading-8">
              <p>
                <a href="mailto:culturalsecretary@example.com">
                  Cultural Secretary
                </a>
              </p>
              <p>
                <a href="mailto:publicity@example.com">Publicity Team</a>
              </p>
              <p>
                <a href="mailto:sponsorship@example.com">Sponsorship</a>
              </p>
              <p>
                <a href="mailto:techteam@example.com">Tech Team</a>
              </p>
            </div>
          </div>
        </div>
        {/* Office card */}
        <div className="w-full sm:w-1/3">
          <div className="flex justify-center items-center mb-4">
            {/* Image for office */}
            <img
              src=""
              alt="office-image"
              className="w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-center leading-8">
            <h1 className=" font-bold mb-2">Office</h1>
            <p>Monday: 09:00 - 16:00</p>
            <p>Tuesday: 09:00 - 16:00</p>
            <p>Wednesday: 09:00 - 16:00</p>
            <p>Thursday: 09:00 - 16:00</p>
            <p>Friday: 09:00 - 16:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

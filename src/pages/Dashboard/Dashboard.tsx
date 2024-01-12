import TicketsCounter from "@/components/Tickets/TicketsCounter";
import "./Dashboard.css";
import UserDetailsBox from "@/components/UserDetails/UserDetailsBox";
import useBookTicket from "@/features/Bookings/useBookTicket";
import useUser from "@/features/Authentication/useUser";
import ButtonSpinner from "@/components/Spinners/ButtonSpinner";
const Dashboard = () => {
  // const { isLoading, url } = useBookTicket(expUser);

  // if (isLoading) {
  // 	return <div>Loading...</div>;
  // }

  // console.log(url, "🔥🔥🔥🔥🔥");

  const { isLoading: userLoading, user } = useUser();

  const { isLoading: urlLoading, bookTicketNow } = useBookTicket();

  function handleBook() {
    if (!user) return;
    bookTicketNow({
      mobile: user.phone_number,
      email: user.email,
      name: user.name,
      ticketPrice: "500",
      ticketType: "1",
      PID: "1",
      userId: user.id,
    });
  }
  
  let message;
  if (user?.booking_info.payment_status === 'success' && user?.booking_info.ticket_status === 'failed') {
    message = "Ticket slots are fully booked! Your refund will be processed within 5-7 working days.";
  } else if (user?.is_ticket_issued === true) {
    message = "CHECK YOUR EMAIL FOR OFFLINE PASS QR CODE!";
  } else {
    message = "GRAB YOUR PASS TODAY TO EXPERIENCE THE ACTION!";
  }

  return (
    <div className="w-full h-full dashboardContainer ">
      <div className="pt-[100px] h-full  flex flex-col lg:flex-row justify-center  items-center  lg:w-[90vw] m-auto">
        <section className=" relative z-[1] lg:max-w-[40%]  flex flex-col justify-center items-start order-last lg:order-first ">
          <h1 className="font-['unbounded',sans-serif] font-extrabold text-5xl lg:text-[5rem]  text-white   lg:px-8 py-10  max-w-fit w-4/6 lg:w-full mx-auto  ">
          {message}
					</h1>
          
          {user?.is_ticket_issued === false ? (

            // Render this div when ticket_status is "success"
            <div className="w-4/6 lg:w-full mx-auto mb-10 h-[100px] bg-green-500 font-['unbounded',sans-serif] font-extrabold text-4xl lg:text-[2.8rem]  text-white p-10 rounded-3xl">
              Ticket Issued Successfully!
            </div>
          ) : (
            // Render the button when ticket_status is not "success"
            <button
              onClick={handleBook}
              className="w-4/6 lg:w-full mx-auto h-[100px] bg-gradient-to-r from-indigo-800 to-indigo-300 font-['unbounded',sans-serif] font-extrabold xl:text-[4rem] lg:text-[3rem] text-4xl mb-10  text-white p-10 rounded-3xl"
            >
              {urlLoading || userLoading ? <ButtonSpinner /> : "Book Tickets Now !"}
            </button>
          )}
        </section>
        <section className=" relative  z-[1] max-w-[70%] md:max-w-[50%] flex justify-center items-center w-full h-full ">
          <UserDetailsBox />
        </section>
      </div>
    </div>
  );
};
export default Dashboard;

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

	return (
		<div className="w-full h-full dashboardContainer ">
			<div className="pt-[100px] h-full  flex justify-around items-center  w-[100vw] m-auto border-2">
				<section className=" relative z-[1] max-w-[50%]  flex flex-col justify-center items-start ">
					<h1 className="font-['unbounded',sans-serif] font-extrabold text-[4rem]  text-white  border-2 px-8 py-4  max-w-fit  ">
						Grab Your Tickets Now
					</h1>
					<div>
						<TicketsCounter />

						<button
							onClick={handleBook}
							className="w-full h-[100px] bg-slate-500 font-['unbounded',sans-serif] font-extrabold text-[4rem]  text-white "
						>
							{urlLoading || userLoading ? (
								<ButtonSpinner />
							) : (
								"Book Tickets Now !"
							)}
						</button>
					</div>
				</section>
				<section className=" relative  z-[1] max-w-[50%] flex justify-center items-center ">
					<UserDetailsBox />
				</section>
			</div>
		</div>
	);
};
export default Dashboard;

// import useBookTicket from "@/features/Bookings/useBookTicket";
import Header from "../../components/Header/Header";
import DashboardBody from "./DashboardBody";
import DashboardTickets from "./DashboardTickets";

// const expUser = {
// 	email: "johndoe@eample.com",
// 	mobile: "1234567890",
// 	PID: "12",
// 	ticketType: "General",
// 	name: "John Doe",
// 	ticketPrice: "300",
// };

const Dashboard = () => {
	// const { isLoading, url } = useBookTicket(expUser);

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	// console.log(url, "🔥🔥🔥🔥🔥");

	return (
		<div className="w-full h-full bg-yellow-300">
			<Header />
			<DashboardTickets />
			<DashboardBody />
		</div>
	);
};
export default Dashboard;

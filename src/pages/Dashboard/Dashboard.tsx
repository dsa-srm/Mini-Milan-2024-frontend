import Header from "../../components/Header/Navbar";
import DashboardBody from "./DashboardBody";
import DashboardTickets from "./DashboardTickets";

const Dashboard = () => {
	return (
		<div className="w-full h-full bg-yellow-300">
			<Header />
			<DashboardTickets />
			<DashboardBody />
		</div>
	);
};
export default Dashboard;

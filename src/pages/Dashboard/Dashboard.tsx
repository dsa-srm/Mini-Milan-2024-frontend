import Header from "../../components/Header/Header";
import DashboardBody from "./DashboardBody";

const Dashboard = () => {
	console.log("Rendered now");
	return (
		<div className="w-full h-full bg-yellow-300">
			<Header />
			<DashboardBody />
		</div>
	);
};
export default Dashboard;

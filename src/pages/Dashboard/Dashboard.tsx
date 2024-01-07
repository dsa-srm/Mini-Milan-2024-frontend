
import TicketsCounter from "@/components/Tickets/TicketsCounter";
import "./Dashboard.css";
import UserDetailsBox from "@/components/UserDetails/UserDetailsBox";
const Dashboard = () => {
	return (
		<div className="w-full h-full dashboardContainer ">
		<div className="pt-[100px] h-full  flex justify-around items-center  w-[100vw] m-auto border-2">
			<section className=" relative z-[1] max-w-[50%]  flex flex-col justify-center items-start ">
				<h1 className="font-['unbounded',sans-serif] font-extrabold text-[4rem]  text-white  border-2 px-8 py-4  max-w-fit  " >Grab Your Tickets Now</h1>
				<div>

				<TicketsCounter/>

				<div className="w-full h-[100px] bg-slate-500 "></div>
				</div>
			</section>
			<section className=" relative  z-[1] max-w-[50%] flex justify-center items-center ">
			<UserDetailsBox/>
			</section>
		</div>
		</div>
	);
};
export default Dashboard;

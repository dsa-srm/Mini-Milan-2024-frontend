import useTickets from "@/features/Bookings/useTickets";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "react-animated-counter";
import { HiOutlineTicket } from "react-icons/hi";

const TicketsCounter = () => {
	// Integer state
	const { isLoading, tickets } = useTickets();

	const [counterValue, setCounterValue] = useState(0);

	useEffect(() => {
		if (!isLoading) setCounterValue(tickets);
	}, [tickets, isLoading]);

	return (
		<div className="flex items-center justify-center max-w-fit gap-x-4 px-[20px]  mt-[50px]  ">
			<p className="flex items-center justify-center text-bold text-white text-[4rem] font-bold font-['unbounded',sans-serif] gap-x-2  ">
				<HiOutlineTicket size={48} /> Tickets Left : 
			</p>
			<AnimatedCounter
				value={counterValue}
				color="white"
				fontSize="40px"
				includeDecimals={false}
			/>
		</div>
	);
};

export default TicketsCounter;

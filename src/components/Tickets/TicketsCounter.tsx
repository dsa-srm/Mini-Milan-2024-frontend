import useTickets from "@/features/Bookings/useFindTickets";
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
		<div className="flex gap-8 divide-x-2 divide-dotted divide-slate-50">
			<p className="text-bold text-white text-[30px]">
				<HiOutlineTicket /> Tickets Left !
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

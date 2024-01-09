import { getTicketCount } from "@/services/apiBooking";
import { useQuery } from "react-query";

const useFindTickets = () => {
	const { isLoading, data: tickets } = useQuery({
		queryKey: ["tickets"],
		queryFn: () => getTicketCount(),
		staleTime: 60000,
		refetchInterval: 60000,
	});

	return { isLoading, tickets };
};

export default useFindTickets;

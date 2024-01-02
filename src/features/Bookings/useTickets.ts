import { getTicketCount } from "@/services/apiBooking";
import { useQuery } from "react-query";

const useTickets = () => {
	const { isLoading, data: tickets } = useQuery({
		queryKey: ["tickets"],
		queryFn: () => getTicketCount(),
		staleTime: 20000,
		refetchInterval: 20000,
	});

	return { isLoading, tickets };
};

export default useTickets;

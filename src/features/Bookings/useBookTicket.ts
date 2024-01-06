import { IRegisterUserObject, bookTicket } from "@/services/apiBooking";
import { useQuery } from "react-query";

const useBookTicket = (reqObj: IRegisterUserObject) => {
	const { isLoading, data: url } = useQuery({
		queryKey: ["booking"],
		queryFn: () => bookTicket(reqObj),
	});

	return { isLoading, url };
};

export default useBookTicket;

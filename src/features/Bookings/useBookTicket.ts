import { IRegisterUserObject, bookTicket } from "@/services/apiBooking";
import { useMutation } from "react-query";

const useBookTicket = () => {
	const { isLoading, mutate: bookTicketNow } = useMutation({
		mutationFn: (reqObj: IRegisterUserObject) => bookTicket(reqObj),
		onSuccess: (resData) => {
			if (resData && resData.status !== 500) {
				// Assuming resData is the full URL
				window.location.href = resData;
			} else {
				return resData;
			}
		},
		onError: () => {
			// Handle error if needed
		},
	});

	return { isLoading, bookTicketNow };
};

export default useBookTicket;

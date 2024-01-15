import { IRegisterUserObject, bookTicket } from "@/services/apiBooking";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";

const useBookTicket = () => {
	const { toast } = useToast();
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
		onError: (error: any) => {
			console.log(error.response.data.message);
			console.log(error);
			// Handle error if needed
			if (error?.response?.data?.message === "TICKET_SOLD_OUT") {
				toast({
					variant: "error",
					title: "Ticket purchase failed",
					description: "Tickets have sold out.",
				});
			} else if (error?.response?.data?.message === "TICKET_ALREADY_PURCHASED") {
				toast({
					variant: "error",
					title: "Ticket Purchase",
					description: "You have already purchased this ticket.",
				});
			} else {
				// Handle other errors
				toast({
					variant: "error",
					title: "Error",
					description: "An error occurred while purchasing the ticket.",
				});
			}
		},
	});

	return { isLoading, bookTicketNow };
};

export default useBookTicket;

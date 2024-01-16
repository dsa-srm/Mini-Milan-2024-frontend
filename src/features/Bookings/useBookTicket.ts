/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRegisterUserObject, bookTicket } from "@/services/apiBooking";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";

const useBookTicket = () => {
  const { toast } = useToast();
  const { isLoading, mutate: bookTicketNow } = useMutation({
    mutationFn: (reqObj: IRegisterUserObject) => bookTicket(reqObj),
    onSuccess: (resData) => {
      if (resData && resData.status === 200) {
        // Assuming resData is the full URL
        window.location.href = resData.result;
      } else if (
        resData &&
        resData.status === 300 &&
        resData.message === "TICKET_SOLD_OUT"
      ) {
        toast({
          variant: "error",
          title: "Ticket purchase failed",
          description: "Tickets have sold out.",
        });
      } else if (
        resData &&
        resData.status === 300 &&
        resData.message === "TICKET_ALREADY_PURCHASED"
      ) {
        toast({
          variant: "error",
          title: "Ticket Purchase",
          description: "You have already purchased this ticket.",
        });
      }
    },
    onError: (error) => {
      // Handle error if needed

      toast({
        variant: "error",
        title: "Error",
        description: `An error occurred while purchasing the ticket. ${error}`,
      });
    },
  });

  return { isLoading, bookTicketNow };
};

export default useBookTicket;

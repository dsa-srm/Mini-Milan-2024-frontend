import {
	IResendEmailObject,
	resendEmail as resendEmailNow,
} from "@/services/apiBooking";
import { useMutation } from "react-query";
import { useToast } from "@/components/ui/use-toast";


const useResendEmail = () => {
	const { toast } = useToast();
	const { isLoading, mutate: resendEmail } = useMutation({
		mutationFn: async (reqObj: IResendEmailObject) => resendEmailNow(reqObj),
		onSuccess: (resData) => {
			if (resData?.message_code === "MAIL_RESENT_SUCCESSFULLY") {
                toast({
                    variant: "success",
                    title: "Success",
                    description: "Mail has been resent successfully.",
                });
			}
            
			return resData; 
		},
		onError: (error: any) => {
            // Check the specific error message or code
            if (error?.response?.data?.message_code === "EMAIL_LIMIT_EXCEEDED") {
                // Display a toast for EMAIL_LIMIT_EXCEEDED error
                toast({
                    variant: "error",
                    title: "Resend Email Failed",
                    description: "Email resend limit has been exceeded. Please try again later.",
                });
            } else {
                // Handle other errors
                toast({
                    variant: "error",
                    title: "Error",
                    description: "An error occurred while resending the email.",
                });
            }
        },
	});
	return { isLoading, resendEmail };
};

export default useResendEmail;

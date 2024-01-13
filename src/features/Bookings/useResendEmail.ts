import {
	IResendEmailObject,
	resendEmail as resendEmailNow,
} from "@/services/apiBooking";
import { useMutation } from "react-query";

const useResendEmail = () => {
	const { isLoading, mutate: resendEmail } = useMutation({
		mutationFn: async (reqObj: IResendEmailObject) => resendEmailNow(reqObj),
		onSuccess: (resData) => {
			return resData;
		},
	});
	return { isLoading, resendEmail };
};

export default useResendEmail;

import { registerUser } from "@/services/apiUser";
import { useMutation } from "react-query";

const useRegister = () => {
	const { mutate: register, isLoading } = useMutation({
		mutationFn: registerUser,
		onSuccess: () => {
			// console.log(data);
			//Need a toast here
		},
	});

	return { register, isLoading };
};

export default useRegister;

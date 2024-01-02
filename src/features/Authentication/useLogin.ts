import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/services/apiUser";

interface LoginProps {
	email: string;
	password: string;
}

const useLogin = () => {
	const navigate = useNavigate();

	const queryClient = useQueryClient();

	const { isLoading, mutate: login } = useMutation({
		mutationFn: ({ email, password }: LoginProps) => loginUser(email, password),
		onSuccess: (userData) => {
			queryClient.setQueryData(["user"], userData);
			navigate("/dashboard", { replace: true });
		},
		onError: (error: Error) => {
			console.log(error);
		},
	});

	return { isLoading, login };
};

export default useLogin;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/services/apiUser";
import { useToast } from "@/components/ui/use-toast";

interface LoginProps {
	email: string;
	password: string;
}

const useLogin = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { toast } = useToast();
	const { isLoading, mutate: login } = useMutation({
		mutationFn: async ({ email, password }: LoginProps) =>
			await loginUser(email, password),
		onSuccess: (userData: any) => {
			if (userData.success) {
				queryClient.setQueryData(["user"], userData?.data?.user);
				toast({
					variant: "success",
					title: "Login Success",
					description: "You have logged in successfully",
				});
				localStorage.setItem("isAuth", "true");
				navigate("/dashboard", { replace: true });
			} else {
				if (userData.message_code === "USER_NOT_FOUND") {
					toast({
						variant: "error",
						title: "Login Failed",
						description: "User does not exist. Please Signup First,",
					});
					navigate("/signup", { replace: true });
				} else if (userData.message_code === "TOO_MANY_REQUESTS") {
					toast({
						variant: "error",
						title: "Login Failed",
						description:
							"Too many request from this IP, please try again in 15 mins!!",
					});
				} else {
					toast({
						variant: "error",
						title: "Login Failed",
						description: userData.message,
					});
				}
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: async (error: any) => {
			console.error(error);
		},
	});

	return { isLoading, login };
};

export default useLogin;

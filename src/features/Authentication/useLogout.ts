import {  useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {  logoutUser } from "@/services/apiUser";
import { useToast } from "@/components/ui/use-toast";

const useLogout = () => {
	const navigate = useNavigate();
    const{toast} = useToast();


	const { isLoading, mutate: logout } = useMutation({
		mutationFn: () => logoutUser(),
		onSuccess: () => {
			navigate("/login", { replace: true });
            toast({
                variant:"success",
                title: "Logout Success",
                description: "You have logged out successfully",
            })
		},
		onError: (error: Error) => {
			console.log(error);
		},
	});

	return { isLoading, logout };
};

export default useLogout;

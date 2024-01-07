import {  useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {  logoutUser } from "@/services/apiUser";



const useLogout = () => {
	const navigate = useNavigate();


	const { isLoading, mutate: logout } = useMutation({
		mutationFn: () => logoutUser(),
		onSuccess: () => {
			navigate("/", { replace: true });
		},
		onError: (error: Error) => {
			console.log(error);
		},
	});

	return { isLoading, logout };
};

export default useLogout;

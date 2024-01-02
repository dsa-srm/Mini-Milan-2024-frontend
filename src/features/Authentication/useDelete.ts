import { QueryClient, useMutation } from "react-query";
import { deleteUser } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";

const useDelete = () => {
	const navigate = useNavigate();

	const queryClient = new QueryClient();

	const { isLoading, mutate: doDelete } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.refetchQueries();

			navigate("/login", { replace: true });
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return { isLoading, doDelete };
};

export default useDelete;

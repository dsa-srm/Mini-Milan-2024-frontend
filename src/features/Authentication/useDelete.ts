import { QueryClient, useMutation } from "react-query";
import { deleteUser } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"; // Import your toast hook

const useDelete = () => {
	const navigate = useNavigate();
	const queryClient = new QueryClient();
	const { toast } = useToast(); // Use the toast hook for notifications

	const { isLoading, mutate: doDelete } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.refetchQueries();
			navigate("/login", { replace: true });
		},
		onError: (error: any) => {
			// Check the specific error message or code
			if (error?.response?.data?.message_code === "TICKET_ALREADY_ISSUED_USER_CANNOT_BE_DELETED") {
				toast({
					variant: "error",
					title: "Deletion Failed",
					description: "User cannot be deleted as a ticket has already been issued.",
				});
			} else {
				// Handle other errors
				toast({
					variant: "error",
					title: "Error",
					description: "An error occurred while trying to delete the user.",
				});
			}
			console.error(error);
		},
	});

	return { isLoading, doDelete };
};

export default useDelete;

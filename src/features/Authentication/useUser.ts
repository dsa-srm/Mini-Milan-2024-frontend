import { getCurrentUser } from "@/services/apiUser";
import { useQuery } from "react-query";

const useUser = () => {
	const { isLoading, data: user ,refetch} = useQuery({
		queryKey: ["user"],
		queryFn: () => getCurrentUser(),
	});

	return { isLoading, user, refetch, isAuthenticated: !!user };
};

export default useUser;

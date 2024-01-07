import { getCurrentUser } from "@/services/apiUser";
import { useQuery } from "react-query";

const useUser = () => {
	const { isLoading, data: user } = useQuery({
		queryKey: ["user"],
		queryFn: () => getCurrentUser(),
	});

	return { isLoading, user, isAuthenticated: !!user };
};

export default useUser;

import { Outlet, useNavigate } from "react-router-dom";
import useUser from "./useUser";
import React, { useEffect } from "react";
import FullPageSpinner from "@/components/Loader/FullPageSpinner";
const UserContext = React.createContext({});

export interface UserContextProps {
	id: string;
	name: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt: string;
	is_ticket_issued: boolean;
	reg_number: string;
	phone_number: string;
	gender: string;
	is_ktr_student: boolean;
}

const ProtectedRoutes = () => {
	const navigate = useNavigate();
	const { isLoading, user, isAuthenticated } = useUser();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			navigate("/login");
		}
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading) {
		return <FullPageSpinner />;
	}

	if (isAuthenticated)
		return (
			<UserContext.Provider value={user}>
				<Outlet />
			</UserContext.Provider>
		);
};

const useUserContext = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

export { useUserContext, ProtectedRoutes };

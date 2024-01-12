// user details :-
// name
// reg_no
// phone_no
// email
// ticket_issued

import useUser from "@/features/Authentication/useUser";
import DeleteUserButton from "./DeleteUserButton";
import { HiBookOpen, HiMail, HiPhone, HiTicket } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

const UserDetailsBox = () => {
	const { isLoading, user } = useUser();

	if (isLoading) return <div>Loading...</div>;
	console.log(user);

	return (
		<div className="flex flex-col items-center  lg:w-4/6  p-4 space-y-4 bg-white rounded-lg shadow-md">
			<div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full">
				<IoPerson className="text-5xl text-gray-400" />
			</div>
			<div className="flex flex-col items-center justify-center space-y-2 w-full">
				<div className="flex items-center space-x-2 w-full py-6">

					<HiBookOpen className="text-6xl text-gray-400" />
					<span className="text-3xl font-semibold text-gray-600 pl-2">
						{user?.name}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full py-6">
					<HiTicket className="text-6xl text-gray-400" />
					<span className="text-3xl font-semibold text-gray-600 pl-2">
						{user?.reg_number}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full py-6">
					<HiPhone className="text-6xl text-gray-400" />
					<span className="text-3xl font-semibold text-gray-600 pl-2">
						
						{user?.phone_number}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full py-6">
					<HiMail className="text-6xl text-gray-400" />
					<span className="text-3xl font-semibold text-gray-600 pl-2">
						{user?.email}
					</span>
				</div>
			</div>
			{!user?.is_ticket_issued && <DeleteUserButton />}
		</div>
		
	);
};

export default UserDetailsBox;

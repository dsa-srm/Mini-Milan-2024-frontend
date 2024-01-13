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
import './userdetails.css'

const UserDetailsBox = () => {
	const { isLoading, user } = useUser();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="flex flex-col items-center justify-end w-5/6  lg:w-4/6  p-4 lg:space-y-4 h-5/6 md:h-5/6 bgimg rounded-lg shadow-md">
			<div className="flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-full md:mb-12">
				<IoPerson className="text-6xl text-gray-400" />
			</div>
			<div className="flex flex-col items-center justify-center space-y-2 w-full max-lg:h-2/6">
				<div className="flex items-center space-x-2 w-full lg:py-6">

					<HiBookOpen className="lg:text-6xl text-5xl text-gray-400" />
					<span className="lg:text-3xl max-lg:text-xl font-semibold text-gray-600 lg:pl-2 max-lg:pl-1">
						{user?.name}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full lg:py-6">
					<HiTicket className="text-5xl lg:text-6xl text-gray-400" />
					<span className="text-xl lg:text-3xl font-semibold text-gray-600 pl-2">
						{user?.reg_number}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full lg:py-6">
					<HiPhone className="text-5xl lg:text-6xl text-gray-400" />
					<span className="text-xl lg:text-3xl font-semibold text-gray-600 pl-2">
						
						{user?.phone_number}
					</span>
				</div>
				<div className="flex items-center space-x-2 w-full lg:py-6">
					<HiMail className="text-5xl lg:text-6xl text-gray-400" />
					<span className="text-xl lg:text-3xl font-semibold text-gray-600 pl-2">
						{user?.email}
					</span>
				</div>
			</div>
			{!user?.is_ticket_issued && <DeleteUserButton />}
		</div>
		
	);
};

export default UserDetailsBox;

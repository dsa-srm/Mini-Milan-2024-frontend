// user details :-
// name
// reg_no
// phone_no
// email
// ticket_issued

import useUser from "@/features/Authentication/useUser";
import BoxRow from "./BoxRow";
import DeleteUserButton from "./DeleteUserButton";
import GlassBox from "./GlassBox";
import { HiBookOpen, HiMail, HiPhone, HiTicket } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

const UserDetailsBox = () => {
	const { isLoading, user } = useUser();

	if (isLoading) return <div>Loading...</div>;

	return (
		<GlassBox >
			<BoxRow field="Name" value={user.name} icon={<IoPerson />} wrap={24} />
			<BoxRow
				field="Registration Number"
				value={user.reg_number}
				icon={<HiBookOpen />}
			/>
			<BoxRow
				field="Phone Number"
				value={user.phone_number}
				icon={<HiPhone />}
			/>
			<BoxRow field="Email" value={user.email} icon={<HiMail />} />
			<BoxRow
				field="Ticket Issued"
				value={user.is_ticket_issued ? "Yes" : "No"}
				icon={<HiTicket />}
			/>
			<div className="w-full flex justify-end">
				<DeleteUserButton />
			</div>
		</GlassBox>
	);
};

export default UserDetailsBox;

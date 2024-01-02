import useDelete from "@/features/Authentication/useDelete";
import useUser from "@/features/Authentication/useUser";

const DeleteUserButton = () => {
	const { isLoading: isGettingUser, user } = useUser();
	const { isLoading: isDeleting, doDelete } = useDelete();

	function handleClick() {
		doDelete(user.id);
	}

	return (
		<button
			disabled={isGettingUser || isDeleting}
			className="bg-red-700/[.8] transition-all duration-500 text-white py-2 px-4 rounded-[.6rem] hover:bg-red-600/[.8]"
			onClick={handleClick}
		>
			Delete Account
		</button>
	);
};

export default DeleteUserButton;

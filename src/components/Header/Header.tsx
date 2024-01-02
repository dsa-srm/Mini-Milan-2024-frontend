import { Avatar } from "@radix-ui/react-avatar";
import React from "react";

interface HeaderButtonProps {
	children: React.ReactNode;
}

const HeaderButton = ({ children }: HeaderButtonProps) => {
	return (
		<button className="px-[2rem] uppercase py-2 text-2xl font-bold bg-[#EC0492]  text-[#FBD800] border-4 border-white rounded-full shadow-mm2024 hover:bg-[#FBD800] hover:text-[#EC0492] transition-all duration-150">
			{children}
		</button>
	);
};

const Header = () => {
	return (
		<header className="flex justify-between items-center w-full px-8 py-4 ">
			<Avatar />
			<div className="flex gap-8">
				<HeaderButton>Login</HeaderButton>
				<HeaderButton>Dashboard</HeaderButton>
			</div>
		</header>
	);
};

export default Header;

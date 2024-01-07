import { useUserContext } from "@/features/Authentication/ProtectedRoutes";
import "./GlassBox.css";
import Avatar, { genConfig } from "react-nice-avatar";

interface GlassBoxProps {
	children: React.ReactNode;
}

const GlassBox = ({ children }: GlassBoxProps) => {
	const user = useUserContext();

	const config = genConfig({
		sex: `${user === "male" ? "man" : "woman"}`,
		hairStyle: "normal",
	});

	return (
		<div className=" max-w-[45rem] border-2 py-[20px] m-auto ">
			<div className=" flex flex-col justify-center items-center space-y-6   " />
			<Avatar
				className="w-40 h-40 ring-white ring-2 ring-offset-2 m-[20px]  "
				{...config}
			/>
			<div className="flex gap-y-3 flex-col mx-[20px]   ">{children}</div>
		</div>
	);
};

export default GlassBox;

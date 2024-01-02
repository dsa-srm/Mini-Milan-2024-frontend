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
		<div className="glass_box">
			<div className="glass_box_clip" />
			<Avatar
				className="w-40 h-40 absolute top-10 left-6 ring-white ring-2 ring-offset-2"
				{...config}
			/>
			<div className="flex gap-4 flex-col">{children}</div>
		</div>
	);
};

export default GlassBox;

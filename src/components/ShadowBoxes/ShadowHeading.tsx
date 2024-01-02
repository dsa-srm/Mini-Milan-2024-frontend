import ShadowBox from "./ShadowBox";

interface HeadingProps {
	children: React.ReactNode;
}

const ShadowHeading = ({ children }: HeadingProps) => {
	return (
		<ShadowBox>
			<p className="uppercase text-[4rem] text-[#6F0DAB]">{children}</p>;
		</ShadowBox>
	);
};

// bg-[#fbd800] rounded-[24px] shadow-[8px_7px_0px_#000000e6]

export default ShadowHeading;

interface ShadowBoxProps {
	children: React.ReactNode;
	paddingX?: string;
	paddingY?: string;
}

const ShadowBox = ({ children }: ShadowBoxProps) => {
	return (
		<div className="items-center justify-center inline-flex px-mm_sm py-esm_esm bg-[#fbd800] rounded-[24px] shadow-[8px_7px_0px_#000000e6] overflow-hidden">
			{children}
		</div>
	);
};

// bg-[#fbd800] rounded-[24px] shadow-[8px_7px_0px_#6c5f5fe6]
//

export default ShadowBox;

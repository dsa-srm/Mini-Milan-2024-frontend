interface MainShadowProps {
	children: React.ReactNode;
	paddingX?: string;
	paddingY?: string;
}

const MainShadow = ({ children }: MainShadowProps) => {
	return (
		<div className="inline-flex items-center justify-center w-full px-mm_md py-mm_sm bg-[#6400b6] rounded-[30px]  shadow-[12px_-10px_0px_#000000]">
			{children}
		</div>
	);
};

// 6500b6
// bg-[#fbd800] rounded-[24px] shadow-[8px_7px_0px_#000000e6]
// rounded-[30px] shadow-[18px_-16px_0px_#000000]

export default MainShadow;

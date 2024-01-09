interface BoxRowProps {
	field: string;
	value: string;
	icon: React.ReactNode;
	wrap?: number;
}

const BoxRow = ({ field, value, icon, wrap }: BoxRowProps) => {
	return (
		<div className="flex w-full items-baseline justify-start gap-2 text-white font-[montserrat]   ">
			<p className="text-[2rem]">{icon}</p>
			<p className="text-[1.8rem] font-semibold">{field} :</p>
			<p className={`text-[1.5rem]`}>
				{wrap && value.length > wrap
					? value.slice(0, wrap) + "..."
					: value.toString()}
			</p>
		</div>
	);
};

export default BoxRow;

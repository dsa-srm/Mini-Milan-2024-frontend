interface BoxRowProps {
	field: string;
	value: string;
	icon: React.ReactNode;
	wrap?: number;
}

const BoxRow = ({ field, value, icon, wrap }: BoxRowProps) => {
	return (
		<div className="flex w-full items-center justify-start gap-2 text-cBlue">
			<p className="text-[1.6rem]">{icon}</p>
			<p className="text-[1.4rem] font-semibold">{field} :</p>
			<p className={`text-[1.4rem]`}>
				{wrap && value.length > wrap
					? value.slice(0, wrap) + "..."
					: value.toString()}
			</p>
		</div>
	);
};

export default BoxRow;

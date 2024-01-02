// import MainShadow from "@/components/ShadowBoxes/MainShadow";
import MainShadow from "@/components/ShadowBoxes/MainShadow";
import ShadowBox from "@/components/ShadowBoxes/ShadowBox";
import ShadowHeading from "@/components/ShadowBoxes/ShadowHeading";
import UserDetailsBox from "@/components/UserDetails/UserDetailsBox";

const DashboardBody = () => {
	return (
		<div className="w-full">
			<MainShadow>
				<div className="w-full flex items-center justify-between">
					<div id="leftSide" className="flex flex-col gap-4">
						<ShadowHeading>Grab Your Tickets Now !!</ShadowHeading>
						<ShadowHeading>Tickets Left - 99999</ShadowHeading>
						<ShadowBox>
							<img src="/images/qr.png" alt="qr" />
						</ShadowBox>
					</div>
					<div id="righSide">
						<ShadowBox>
							<UserDetailsBox />
						</ShadowBox>
					</div>
				</div>
			</MainShadow>
		</div>
	);
};

export default DashboardBody;

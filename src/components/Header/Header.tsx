import useLogout from "@/features/Authentication/useLogout";
import useUser from "@/features/Authentication/useUser";
// import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
// interface HeaderButtonProps {
// 	children: React.ReactNode;
// }

// const HeaderButton = ({ children}: HeaderButtonProps) => {
// 	return (
// 		<button className="px-[2rem] uppercase py-3 text-2xl font-extrabold text-[white] bg-cBlue rounded-[0.5rem] mx-[1rem] font-[montserrat] border-2  " >
// 			{children}
// 		</button>
// 	);
// };

const Header = () => {
  const navigate = useNavigate();
  const {  user } = useUser();

  const { isLoading: logOutLoading, logout } = useLogout();

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="p-4 w-[100vw] fixed top-0 z-[999] headerContainer ">
      <div className=" flex gap-x-4  justify-between items-center relative z-[999] ">
        <p
          className="font-['Unbounded',sans-serif]  font-black text-[3rem] drop-shadow-lg bg-gradient-to-r from-cBlue to-cOrange  text-transparent  text-center leading-[90%]  bg-clip-text  
		  text-stroke-3	text-white px-4 py-2"

        >
          Mini
          <br /> milan
        </p>
        <div>
          <Button
            variant={"custom"}
            size={"custom"}
            onClick={() => navigate("/faq")}
          >
            FAQ
          </Button>
          {user ? (
            <Button
              variant={"custom"}
              size={"custom"}
              onClick={handleLogout}
              disabled={logOutLoading}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant={"custom"}
              size={"custom"}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
          <Button
            variant={"custom"}
            size={"custom"}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import useLogout from "@/features/Authentication/useLogout";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const { isLoading: logOutLoading, logout } = useLogout();
  const isActive: string[] = location.pathname.split("/").filter(Boolean);
  const handleLogout = async () => {
    try {
      logout();
      localStorage.setItem("isAuth", "false");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const isAuth: string = localStorage.getItem("isAuth") || "false";
  return (
    <header
      className={`p-4 w-[100vw] fixed top-0 z-[997]
      headerContainer-${isActive[0]}
	 `}
    >
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
          {isAuth === "true" ? (
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
              Login/signup
            </Button>
          )}
          {isAuth === "true" ? (
            <Button
              variant={"custom"}
              size={"custom"}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant={"custom"}
              size={"custom"}
              onClick={() => navigate("/signup")}
            >
              Buy Ticket
            </Button>
          )}
        
        </div>
      </div>
    </header>
  );
};

export default Header;

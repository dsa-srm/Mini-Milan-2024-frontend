// NotFound.js
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="h-full bg-slate-600">
        <div className="pt-36 flex justify-center items-center">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist. You will be redirected to the homepage in 5 seconds.</p>
      </div>
    </div>
  );
};

export default NotFound;

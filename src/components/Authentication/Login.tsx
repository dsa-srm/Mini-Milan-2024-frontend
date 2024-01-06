import useLogin from "@/features/Authentication/useLogin";

const Login = () => {
	const { isLoading, login } = useLogin();

	const data = { email: "jd4821@srmist.edu.in", password: "secretpassword" };

	function handleLogin() {
		login(data);
	}

	return (
		<button disabled={isLoading} onClick={handleLogin}>
			Login
		</button>
	);
};

export default Login;

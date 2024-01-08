import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProtectedRoutes } from "./features/Authentication/ProtectedRoutes";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/Signup";
import Header from "./components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import Faq from "./pages/FAQs/Faq";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route index element={<Navigate to="/dashboard" />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/faq" element={<Faq />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}
export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProtectedRoutes } from "./features/Authentication/ProtectedRoutes";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import Faq from "./pages/FAQs/Faq";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";

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
					<Route path="/" element={<Home/>} />

					
					<Route >
						<Route  element={<Navigate to="/dashboard" />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
						<Route path="/faq" element={<Faq />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
		/*element={<ProtectedRoutes />}*/
	);
}
export default App;
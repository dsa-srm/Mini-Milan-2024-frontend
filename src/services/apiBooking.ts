import { ticketsApi } from "@/Api/ApiRoutes";

export async function getTicketCount() {
	const response = await fetch(ticketsApi, {
		credentials: "include",
	});
	const data = await response.json();
	const res = data?.data?.total_count;
	return res;
}

import { bookTicketApi, ticketsApi } from "@/Api/ApiRoutes";

export interface IRegisterUserObject {
	email: string;
	mobile: string;
	PID: string;
	ticketType: string;
	name: string;
	ticketPrice: string;
}

export async function getTicketCount() {
	const response = await fetch(ticketsApi, {
		credentials: "include",
	});
	const data = await response.json();
	const res = data?.data?.total_count;
	return res;
}

export async function bookTicket(bodyObj: IRegisterUserObject) {
	const response = await fetch(bookTicketApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(bodyObj),
	});

	const data = await response.json();
	const res = data?.result;
	return res;
}

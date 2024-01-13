import { bookTicketApi, resendEmailApi, ticketsApi } from "@/Api/ApiRoutes";

export interface IRegisterUserObject {
	email: string;
	mobile: string;
	ticketType: string;
	name: string;
	ticketPrice: string;
	userId: string;
}

export interface IResendEmailObject {
	email: string;
	ticket_id: string;
	user_id: string;
	payment_id: string;
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
		body: JSON.stringify(bodyObj),
	});

	const data = await response.json();
	const res = data?.result;
	return res;
}

export async function resendEmail(bodyObj: IResendEmailObject) {
	const response = await fetch(resendEmailApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bodyObj),
	});

	const data = await response.json();
	const res = data;
	return res;
}

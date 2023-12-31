import {
	deleteUserApi,
	getCurrentUserApi,
	loginUserApi,
	registerUserApi,
} from "@/Api/ApiRoutes";

interface IRegisterUserObject {
	name: string;
	email: string;
	password: string;
	reg_number: string;
	is_ktr_student: boolean;
	gender: string;
	phone_number: string;
}

export async function getCurrentUser() {
	const response = await fetch(getCurrentUserApi, {
		credentials: "include",
	});
	const data = await response.json();
	const res = data?.data?.user;
	return res;
}

// async function getUser(id: string) {
// 	const response = await fetch(`https://reqres.in/api/users/${id}`);
// 	return response.json();
// }

export async function deleteUser(id: string) {
	await fetch(`${deleteUserApi}${id}`, {
		credentials: "include",
		method: "DELETE",
	});
	return;
}

export async function loginUser(email: string, password: string) {
	const response = await fetch(loginUserApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify({ email, password }),
	});

	const data = await response.json();
	const res = data?.data?.user;
	return res;
}

export async function registerUser(userObj: IRegisterUserObject) {
	const response = await fetch(registerUserApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(userObj),
	});

	const data = await response.json();
	const res = data?.data?.user;
	return res;
}

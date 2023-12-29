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
	const token =
		document.cookie
			.split(";")
			.find((item) => item.includes("token"))
			?.split("=")[1] || null; // get token from cookie

	if (!token) return null;

	const response = await fetch(getCurrentUserApi, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();
	const res = data.data.user;
	return res;
}

// async function getUser(id: string) {
// 	const response = await fetch(`https://reqres.in/api/users/${id}`);
// 	return response.json();
// }

export async function deleteUser(id: string) {
	const token =
		document.cookie
			.split(";")
			.find((item) => item.includes("token"))
			?.split("=")[1] || null; // get token from cookie

	if (!token) return null;

	await fetch(`${deleteUserApi}${id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
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
	const res = data.data.user;
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
	const res = data.data.user;
	return res;
}

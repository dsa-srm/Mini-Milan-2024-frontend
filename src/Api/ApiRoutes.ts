//https://api.srmmilan.org
//http://localhost:5000

const VAR = import.meta.env.VITE_VAR;

export const getCurrentUserApi = `${VAR}/api/users/current`;
export const deleteUserApi = `${VAR}/api/users/`;
export const loginUserApi = `${VAR}/api/users/login`;
export const logoutUserApi = `${VAR}/api/users/logout`;
export const registerUserApi = `${VAR}/api/users/signup`;
export const ticketsApi = `${VAR}/api/bookings/livecount`;
export const bookTicketApi = `https://paymenow.co.in/Admin/api/encryptData`;
export const resendEmailApi = `${VAR}/api/bookings/resendEmail`;

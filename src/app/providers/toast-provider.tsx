"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastProivder = () => (
	<ToastContainer
		position="top-right"
		autoClose={5000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		theme="colored"
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
	/>
);

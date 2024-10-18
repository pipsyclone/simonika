"use client";
import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/global/styles.css";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return (
		<html lang="en">
			<body>
				<Topbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

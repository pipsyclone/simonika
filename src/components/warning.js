"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const Warning = ({ data }) => {
	useEffect(() => {
		const nextButton = document.getElementById("nextButton");
		if (nextButton) {
			nextButton.click();
		}
	}, []);

	const validDataKeys = data
		.map((item, key) => (item.result.ip >= 10 ? key : null)) // Mengambil key dari data yang memenuhi syarat
		.filter((key) => key !== null); // Hapus nilai `null`

	const smallestKey = Math.min(...validDataKeys); // Ambil key terkecil

	return (
		<div
			id="carouselExampleInterval"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{
				width: "400px",
				height: "fit-content",
				position: "fixed",
				zIndex: "1000",
				bottom: "50px",
				left: "10px",
			}}
		>
			<div className="carousel-inner">
				{data.map((data, key) => {
					if (data.result.ip >= 10) {
						return (
							<div
								className={
									key === smallestKey ? "carousel-item active" : "carousel-item"
								}
								key={key}
							>
								<div className="alert alert-danger">
									<div className="d-flex space-between">
										<div className="flex-grow-1">
											<span className="bg-danger p-1 border-0 rounded-1 text-white me-3">
												<i className="fa-solid fa-warning"></i>
											</span>
											<b>{data.kabkota}</b>
										</div>
										<div className="flex-grow-1 text-end">{data.tgl_data}</div>
									</div>
									<hr />
									<small>{data.alamat}</small>
									<br />
									<strong>Tercemar Berat!</strong>
									<hr />
									<div className="d-flex space-between">
										<div className="flex-grow-1">{data.result.kritis}</div>
										<div className="flex-grow-1 text-end">
											IP : {data.result.ip}
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="next"
				id="nextButton"
				hidden={true}
			></button>
		</div>
	);
};

export default Warning;

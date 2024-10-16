"use client";
// import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Warning from "./warning";

// Disable SSR for Leaflet components
// const L = dynamic(() => import("leaflet"), { ssr: false });
// const MapContainer = dynamic(
// 	() => import("react-leaflet").then((mod) => mod.MapContainer),
// 	{ ssr: false }
// );
// const TileLayer = dynamic(
// 	() => import("react-leaflet").then((mod) => mod.TileLayer),
// 	{ ssr: false }
// );

const Map = () => {
	const [data, setData] = useState([]);

	const goodWaterMarker = new L.Icon({
		iconUrl: "/good-water-marker.png", // Path ke gambar marker custom
		iconSize: [32, 32], // Ukuran marker custom
		iconAnchor: [32 / 2, 32], // Anchor dari marker custom
	});

	const pollutedWaterMarker = new L.Icon({
		iconUrl: "/polluted-water-marker.png", // Path ke gambar marker custom
		iconSize: [25, 32], // Ukuran marker custom
		iconAnchor: [32 / 2, 32], // Anchor dari marker custom
	});

	const lightlyPollutedWater = new L.Icon({
		iconUrl: "/lightly-polluted-water-marker.png", // Path ke gambar marker custom
		iconSize: [25, 32], // Ukuran marker custom
		iconAnchor: [32 / 2, 32], // Anchor dari marker custom
	});

	const heavilyPollutedWaterMarker = new L.Icon({
		iconUrl: "/heavily-polluted-water-marker.png", // Path ke gambar marker custom
		iconSize: [25, 32], // Ukuran marker custom
		iconAnchor: [32 / 2, 32], // Anchor dari marker custom
	});

	const noDataMarker = new L.Icon({
		iconUrl: "/no-data-marker.png", // Path ke gambar marker custom
		iconSize: [20, 20], // Ukuran marker custom
		iconAnchor: [32 / 2, 32], // Anchor dari marker custom
	});

	const getDataMaps = async () => {
		await axios
			.get("/api/data-ika")
			.then((res) => {
				setData(res.data.data);
				console.log(res);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		getDataMaps();
	}, []);
	return (
		<>
			<MapContainer
				center={[-2, 118]}
				zoom={5}
				scrollWheelZoom={true}
				style={{ width: "100%", height: "100vh" }}
			>
				<TileLayer
					url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
					map
				/>
				{data.map((dataMap, key) => {
					if (dataMap.result.ip >= 0 && dataMap.result.ip <= 1) {
						return (
							<Marker
								position={[dataMap?.latitude, dataMap?.longitude]}
								icon={goodWaterMarker}
								key={key}
							>
								<Tooltip>
									<table className="table table-sm table-bordered">
										<thead className="text-center">
											<tr>
												<td className="bg-success text-white" colSpan={2}>
													{dataMap.IDStasiun} - {dataMap.kabkota}
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>DAS</td>
												<td>{dataMap.nama_das}</td>
											</tr>
											<tr>
												<td>IP</td>
												<td>{dataMap.result.ip}</td>
											</tr>
											<tr>
												<td>Kritis</td>
												<td>{dataMap.result.kritis}</td>
											</tr>
										</tbody>
									</table>
								</Tooltip>
							</Marker>
						);
					} else if (dataMap.result.ip >= 1 && dataMap.result.ip <= 5) {
						return (
							<Marker
								position={[dataMap?.latitude, dataMap?.longitude]}
								icon={pollutedWaterMarker}
								key={key}
							>
								<Tooltip>
									<table className="table table-sm table-bordered">
										<thead className="text-center">
											<tr>
												<td className="bg-info text-white" colSpan={2}>
													{dataMap.IDStasiun} - {dataMap.kabkota}
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>DAS</td>
												<td>{dataMap.nama_das}</td>
											</tr>
											<tr>
												<td>IP</td>
												<td>{dataMap.result.ip}</td>
											</tr>
											<tr>
												<td>Kritis</td>
												<td>{dataMap.result.kritis}</td>
											</tr>
										</tbody>
									</table>
								</Tooltip>
							</Marker>
						);
					} else if (dataMap.result.ip >= 5 && dataMap.result.ip <= 10) {
						return (
							<Marker
								position={[dataMap?.latitude, dataMap?.longitude]}
								icon={lightlyPollutedWater}
								key={key}
							>
								<Tooltip>
									<table className="table table-sm table-bordered">
										<thead className="text-center">
											<tr>
												<td className="bg-warning text-white" colSpan={2}>
													{dataMap.IDStasiun} - {dataMap.kabkota}
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>DAS</td>
												<td>{dataMap.nama_das}</td>
											</tr>
											<tr>
												<td>IP</td>
												<td>{dataMap.result.ip}</td>
											</tr>
											<tr>
												<td>Kritis</td>
												<td>{dataMap.result.kritis}</td>
											</tr>
										</tbody>
									</table>
								</Tooltip>
							</Marker>
						);
					} else if (dataMap.result.ip >= 10) {
						return (
							<Marker
								position={[dataMap?.latitude, dataMap?.longitude]}
								icon={heavilyPollutedWaterMarker}
								key={key}
							>
								<Tooltip>
									<table className="table table-sm table-bordered">
										<thead className="text-center">
											<tr>
												<td className="bg-danger text-white" colSpan={2}>
													{dataMap.IDStasiun} - {dataMap.kabkota}
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>DAS</td>
												<td>{dataMap.nama_das}</td>
											</tr>
											<tr>
												<td>IP</td>
												<td>{dataMap.result.ip}</td>
											</tr>
											<tr>
												<td>Kritis</td>
												<td>{dataMap.result.kritis}</td>
											</tr>
										</tbody>
									</table>
								</Tooltip>
							</Marker>
						);
					} else {
						return (
							<Marker
								position={[dataMap?.latitude, dataMap?.longitude]}
								icon={noDataMarker}
								key={key}
							>
								<Tooltip>
									<table className="table table-sm table-bordered">
										<thead className="text-center">
											<tr>
												<td className="bg-secondary text-white fw-bold">
													Data Tidak Tersedia!
												</td>
											</tr>
										</thead>
									</table>
								</Tooltip>
							</Marker>
						);
					}
				})}
			</MapContainer>

			<Warning data={data} />
		</>
	);
};

export default Map;

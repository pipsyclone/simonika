import Image from "next/image";
import ImageArtikel from "@/assets/images/artikel.webp";

const Artikel = () => {
	return (
		<div className="container mx-auto">
			<div className="vstack gap-5">
				<div className="d-flex flex-row gap-3">
					<Image
						src={ImageArtikel}
						alt="Artikel"
						width={0}
						height={0}
						style={{ width: "100%", height: "300px", borderRadius: "5px" }}
					/>
					<div className="vstack gap-3">
						<h5 className="text-limit-1">Lorem Ipsum</h5>
						<div className="fs-5 text-limit-5 text-justify">
							Pembuangan Sampah Sementara (TPS) di Majalengka ♻️🚛 Rabu 09
							Oktober 2024, telah dilakukan monitoring ke beberapa TPS di
							Majalengka: Majalengka Kulon, Sukaraja Kulon, Babakan Majeti, dan
							Karayunan. Kunjungan ini bertujuan untuk melihat langsung
							pengelolaan sampah di masing-masing TPS dan mencari solusi terbaik
							untuk meningkatkan kebersihan serta efektivitas pengelolaan sampah
							di wilayah ini. Poin utama yang dibahas: 1. Peningkatan fasilitas
							dan pengelolaan sampah. 2. Edukasi masyarakat mengenai pemilahan
							sampah dari rumah. 3. Pengelolaan sampah yang lebih ramah
							lingkungan. Kebersihan lingkungan adalah tanggung jawab kita
							bersama. Dengan kerjasama dari berbagai pihak, kita bisa menjaga
							Majalengka tetap bersih dan hijau.
						</div>

						<small className="text-secondary">
							<i>Nama Penulis</i> | 24 10 2024
						</small>
						<button className="btn btn-primary w-25">
							Lihat Lebih Lengkap...
						</button>
					</div>
				</div>
				<div className="d-flex flex-row flex-row-reverse gap-3">
					<Image
						src={ImageArtikel}
						alt="Artikel"
						width={0}
						height={0}
						style={{ width: "100%", height: "300px", borderRadius: "5px" }}
					/>
					<div className="vstack gap-3">
						<h5 className="text-limit-1">Lorem Ipsum</h5>
						<span className="fs-5 text-limit-5 text-justify">
							Pembuangan Sampah Sementara (TPS) di Majalengka ♻️🚛 Rabu 09
							Oktober 2024, telah dilakukan monitoring ke beberapa TPS di
							Majalengka: Majalengka Kulon, Sukaraja Kulon, Babakan Majeti, dan
							Karayunan. Kunjungan ini bertujuan untuk melihat langsung
							pengelolaan sampah di masing-masing TPS dan mencari solusi terbaik
							untuk meningkatkan kebersihan serta efektivitas pengelolaan sampah
							di wilayah ini. Poin utama yang dibahas: 1. Peningkatan fasilitas
							dan pengelolaan sampah. 2. Edukasi masyarakat mengenai pemilahan
							sampah dari rumah. 3. Pengelolaan sampah yang lebih ramah
							lingkungan. Kebersihan lingkungan adalah tanggung jawab kita
							bersama. Dengan kerjasama dari berbagai pihak, kita bisa menjaga
							Majalengka tetap bersih dan hijau.
						</span>

						<small className="text-secondary">
							<i>Nama Penulis</i> | 24 10 2024
						</small>
						<button className="btn btn-primary w-25">
							Lihat Lebih Lengkap...
						</button>
					</div>
				</div>
				<div className="d-flex flex-row gap-3">
					<Image
						src={ImageArtikel}
						alt="Artikel"
						width={0}
						height={0}
						style={{ width: "100%", height: "300px", borderRadius: "5px" }}
					/>
					<div className="vstack gap-3">
						<h5 className="text-limit-1">Lorem Ipsum</h5>
						<span className="fs-5 text-limit-5 text-justify">
							Pembuangan Sampah Sementara (TPS) di Majalengka ♻️🚛 Rabu 09
							Oktober 2024, telah dilakukan monitoring ke beberapa TPS di
							Majalengka: Majalengka Kulon, Sukaraja Kulon, Babakan Majeti, dan
							Karayunan. Kunjungan ini bertujuan untuk melihat langsung
							pengelolaan sampah di masing-masing TPS dan mencari solusi terbaik
							untuk meningkatkan kebersihan serta efektivitas pengelolaan sampah
							di wilayah ini. Poin utama yang dibahas: 1. Peningkatan fasilitas
							dan pengelolaan sampah. 2. Edukasi masyarakat mengenai pemilahan
							sampah dari rumah. 3. Pengelolaan sampah yang lebih ramah
							lingkungan. Kebersihan lingkungan adalah tanggung jawab kita
							bersama. Dengan kerjasama dari berbagai pihak, kita bisa menjaga
							Majalengka tetap bersih dan hijau.
						</span>

						<small className="text-secondary">
							<i>Nama Penulis</i> | 24 10 2024
						</small>
						<button className="btn btn-primary w-25">
							Lihat Lebih Lengkap...
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Artikel;

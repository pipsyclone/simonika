import Image from "next/image";
import LogoMjlk from "@/assets/images/logo_mjlk.png";
import LogoKemenLH from "@/assets/images/kemenlh.png";

const Footer = () => {
	return (
		<footer className="bg-tertiary p-3">
			<div className="d-flex gap-3">
				<Image
					src={LogoMjlk}
					alt="Logo Majalengka"
					width={0}
					height={0}
					style={{ width: "40px", height: "auto" }}
				/>
				<Image
					src={LogoKemenLH}
					alt="Logo Kementrian Lingkungan Hidup"
					width={0}
					height={0}
					style={{ width: "40px", height: "auto" }}
				/>
			</div>
			<hr />
			<div className="d-flex space-between text-secondary">
				<span className="flex-grow-1">
					Licensed by Apip Rahman Syahidan &copy; 2024
				</span>
				<span className="flex-grow-1 text-end">
					Sumber Data Kementrian Lingkungan Hidup dan Kehutanan
				</span>
			</div>
		</footer>
	);
};

export default Footer;

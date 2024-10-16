import Image from "next/image";
import ImageInfografis from "@/assets/images/infografis.jpg";

const Infografis = () => {
	return (
		<div className="container mx-auto">
			<div className="row row-cols-3 gap-2">
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
				<Image
					src={ImageInfografis}
					alt="ImageInfografis"
					width={0}
					height={0}
					className="col"
					style={{ width: "430px", height: "400px" }}
				/>
			</div>
		</div>
	);
};

export default Infografis;

import Hero from "@/components/hero";
import Artikel from "@/components/artikel";
import Infografis from "@/components/infografis";
import Pelit from "@/components/pelit";

const Index = () => {
	return (
		<>
			<section className="p-3 mb-5 d-flex" id="hero">
				<Hero />
			</section>
			<section className="p-3 mb-5" id="artikel">
				<Artikel />
			</section>
			<section className="p-3 mb-5" id="infografis">
				<Infografis />
			</section>
			<section className="bg-body-tertiary p-3" id="pelit">
				<Pelit />
			</section>
		</>
	);
};

export default Index;

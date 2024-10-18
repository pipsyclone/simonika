import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
	ssr: false,
});

export const metadata = {
	title: "Monitoring IKA Nasional",
};

export default function MonitoringIKA() {
	return <Map />;
}

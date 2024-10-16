import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
	ssr: false,
});

export default function MonitoringIKA() {
	return <Map />;
}

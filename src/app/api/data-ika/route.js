import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://ppkl.menlhk.go.id/onlimo-2022/", {
			cache: "no-store",
		});
		const html = await response.text();
		const $ = cheerio.load(html);

		let dataMap = null;
		// Iterasi melalui semua tag <script>
		$("script").each((index, element) => {
			const scriptContent = $(element).html();

			// Cek apakah scriptContent mengandung 'var dataMap'
			if (scriptContent && scriptContent.includes("var dataMap")) {
				// Ambil string yang relevan dari konten
				const startIndex =
					scriptContent.indexOf("var dataMap = ") + "var dataMap = ".length;
				const endIndex = scriptContent.indexOf(";", startIndex);

				// Ambil substring yang berisi dataMap
				const dataMapString = scriptContent
					.substring(startIndex, endIndex)
					.trim();

				// Debugging: Log dataMapString untuk melihat isi
				// console.log("dataMapString:", dataMapString);
				dataMap = JSON.parse(dataMapString);
			}
		});

		return NextResponse.json({
			status: 200,
			message: "OKE",
			data: dataMap,
		});
	} catch (err) {
		return NextResponse.json({ status: 500, message: err.message });
	}
}

import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

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

		// if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		// 	return res.status(401).end('Unauthorized');
		//   }

		if (dataMap) {
			for (const item of dataMap) {
				if (item.IDStasiun === "KLHK250") {
					await prisma.dapa.create({
						data: {
							// userid: "4df80e04-04d0-422e-9c7c-818f920fd3be", // dev
							userid: "64f67646-9af1-41dc-bf1d-417f0fe174fe", // prod
							AMONIA: item?.result?.avg?.Amonia ? item.result.avg.Amonia : 0,
							BOD: item?.result?.avg?.BOD ? item.result.avg.BOD : 0,
							COD: item?.result?.avg?.COD ? item.result.avg.COD : 0,
							DO: item?.result?.avg?.DO ? item.result.avg.DO : 0,
							NITRAT: item?.result?.avg?.Nitrat ? item.result.avg.Nitrat : 0,
							PH: item?.result?.avg?.PH ? item.result.avg.PH : 0,
							TDS: item?.result?.avg?.TDS ? item.result.avg.TDS : 0,
							TSS: item?.result?.avg?.TSS ? item.result.avg.TSS : 0,
							IP: item.result.ip,
							critical: item.result.kritis,
							date: item.tgl_data,
						},
					});
				}
			}
		}

		console.log("Cron Job Run at : " + new Date() + ", Data Saved!");
		return NextResponse.json({
			status: 200,
			message: "Data Saved!",
		});
	} catch (err) {
		return NextResponse.json({ status: 200, message: err.message });
	}
}

import cheerio from "cheerio";
import { NextResponse } from "next/server";
import cron from "node-cron";

async function ScrapeAndSave() {
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

		if (dataMap) {
			for (const item of dataMap) {
				if (item.IDStasiun === "KLHK250") {
					await prisma.dapa.create({
						data: {
							userid: "93939153-916d-48cd-a51e-e1920d1a4d74",
							AMONIA: item.result.avg.Amonia,
							BOD: item.result.avg.BOD,
							COD: item.result.avg.COD,
							DO: item.result.avg.DO,
							NITRAT: item.result.avg.Nitrat,
							PH: item.result.avg.PH,
							TDS: item.result.avg.DO,
							TSS: item.result.avg.DO,
							IP: item.result.ip,
							critical: item.result.kritis,
							date: item.tgl_data,
						},
					});
				}
			}
		}

		return dataMap;
	} catch (err) {
		return err.message;
	}
}

// Jadwalkan untuk menyimpan data setiap hari jam 08.00 WIB (01:00 UTC)
cron.schedule(
	"0 1 * * *", // 01.00 UTC = 08.00 WIB, * * * * * = run per minute
	async () => {
		console.log("Running scheduled task at:", new Date());
		await ScrapeAndSave();
	},
	{
		timezone: "Asia/Jakarta", // Set timezone ke WIB
	}
);

export async function GET() {
	return NextResponse.json({ status: 200, message: "Cron is running!" });
}

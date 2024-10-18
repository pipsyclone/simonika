const { PrismaClient } = require("@prisma/client");
const md5 = require("md5");

const prisma = new PrismaClient();

async function main() {
	// const existingData = await prisma.users.findMany();

	// if (existingData.length >= 1) {
	// 	await prisma.users.deleteMany();
	// 	await prisma.mailboxs.deleteMany();
	// 	await prisma.dapa.deleteMany();
	// 	await prisma.articles.deleteMany();
	// 	await prisma.comments.deleteMany();
	// } else {
	await prisma.users.upsert({
		where: { email: "admin@mail.com" },
		update: {},
		create: {
			name: "Admin 1",
			username: "admin",
			email: "admin@mail.com",
			password: md5("admin123"),
			role: "ADMIN",
			qrtoken: md5("Admin 1", "admin", "admin@mail.com", md5("admin123")),
		},
	});
	await prisma.users.upsert({
		where: { email: "staff@mail.com" },
		update: {},
		create: {
			name: "Staff 1",
			username: "staff",
			email: "staff@mail.com",
			password: md5("staff123"),
			role: "STAFF",
			qrtoken: md5("Staff 1", "staff", "staff@mail.com", md5("staff123")),
		},
	});
	// }
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

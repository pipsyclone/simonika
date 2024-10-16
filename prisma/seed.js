const { PrismaClient } = require("@prisma/client");
const md5 = require("md5");

const prisma = new PrismaClient();

async function main() {
	await prisma.users.create({
		data: {
			name: "Admin 1",
			username: "admin",
			email: "admin@mail.com",
			password: md5("admin123"),
			role: "ADMIN",
			qrtoken: md5("Admin 1", "admin", "admin@mail.com", md5("admin123")),
		},
	});

	await prisma.users.create({
		data: {
			name: "Staff 1",
			username: "staff",
			email: "staff@mail.com",
			password: md5("staff123"),
			role: "STAFF",
			qrtoken: md5("Staff 1", "staff", "staff@mail.com", md5("staff123")),
		},
	});
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

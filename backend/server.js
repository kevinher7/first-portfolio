import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 1912;

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/", (req, res) => {
	// const options = {
	// 	root: path.join(__dirname, "../frontend/public"),
	// };
	// const fileName = "index.html";
	// console.log();

	// res.sendFile(fileName, options, (err) => {
	// 	if (err) {
	// 		console.error("Error sending file:", err);
	// 	} else {
	// 		console.log("Sent:", fileName);
	// 	}
	// });
	console.log("got");
});

app.listen(PORT, () => {
	console.log(`Express server running at http://localhost:${PORT}/`);
});

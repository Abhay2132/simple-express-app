const { createServer } = require("http");
const app = require("express")();
const port = process.env.PORT || 4000;
const fs = require("fs")

app.use((req, res) => {
	fs.writeFileSync("data.txt", "Hello World");
	const hello = fs.readFileSync("data.txt");
	res.end(hello + " | EXPRESS");
})

createServer(app)
	.listen(port, () => console.log("Server Started at port :", port));
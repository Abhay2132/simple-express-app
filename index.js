const {createServer} = require("http");
const app = require("express")();
const port = process.env.PORT || 4000;

app.use((req,res) =>{
	res.end("Hello World | EXPRESS");
})

createServer(app)
.listen(port, ()=>console.log("Server Started at port :", port));
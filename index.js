import express from "express";
import cors from "cors";

const app = express();
const port = 3310;

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

app.use(cors({ origin: ["http://localhost:5173"] }));
app.get("/api/employees", (req, res) => {
	res.json({ results: [sampleEmployee] });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

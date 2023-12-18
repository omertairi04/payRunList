import express from "express";
// import expressLayouts from "express-ejs-layouts";
import payRun from "./payRun.json" assert { type: "json" };
const app = express();

app.use(express.static("public"));
app.use(express.static("style"));
// app.use(expressLayouts);
app.set("view engine", "ejs");

// Define a route to read and parse the JSON file and render an EJS template
app.get("/", (req, res) => {
  const payRuns = payRun;
  res.render("generate", { data: payRuns.data });
});

app.listen(4000, () => {
  console.log("Starting in http://localhost:4000");
});

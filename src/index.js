import express from "express";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import ejs from "ejs";
import payRun from "./payRun.json" assert { type: "json" };

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define a route to read and parse the JSON file and render an EJS template
app.get("/nolandscape", async (req, res) => {
  const payRuns = payRun;
  const ejsFilePath = path.join(__dirname, "../views", "generate.ejs");
  const renderedHtml = await ejs.renderFile(ejsFilePath, {
    payRuns: payRuns,
  });
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(renderedHtml);

  await page.setContent(renderedHtml, {
    waitUntil: ["domcontentloaded", "networkidle0"],
  });
  await page.waitForSelector(".payListInformation");
  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: "10px",
      right: "5px",
      left: "5px",
      bottom: "5px",
    },
  });

  await browser.close();

  // Save PDF to a file or send it as a response
  const pdfPath = path.join(__dirname, "generated.pdf");
  fs.writeFileSync(pdfPath, pdf);

  // Sending the PDF as a response
  res.contentType("application/pdf");
  res.sendFile(pdfPath);
});

// Define a route to read and parse the JSON file and render an EJS template
app.get("/", async (req, res) => {
  const payRuns = payRun;
  const ejsFilePath = path.join(__dirname, "../views", "generate.ejs");
  const renderedHtml = await ejs.renderFile(ejsFilePath, {
    payRuns: payRuns,
  });
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(renderedHtml);

  await page.setContent(renderedHtml, { waitUntil: "networkidle0" });
  await page.waitForSelector(".payListInformation");
  const pdf = await page.pdf({
    format: "A4",
    landscape: true,
    margin: {
      top: "2cm",
      right: "1cm",
      left: "1cm",
      bottom: "2cm",
    },
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `
    <div style="position: fixed; bottom: 1.5cm; left: 1.65cm; right: 1.5cm; font-size: 12px;">
      <div style="border-top: 1px solid rgb(222, 220, 220); margin-bottom:0.2cm; width: 100%;"></div>
      <a href="https://accountx.mk" style=" color: rgb(33 150 243 / 50%);   text-decoration: none;">accountx.mk</a>
      <div style="float:right; right: 0;  color: grey"><span class="pageNumber" style="color: grey;"></span> од <span class="totalPages"></span></div>
    </div>
  `,
  });

  await browser.close();

  // Save PDF to a file or send it as a response
  const pdfPath = path.join(__dirname, "generatedLandscape.pdf");
  fs.writeFileSync(pdfPath, pdf);

  // Sending the PDF as a response
  res.contentType("application/pdf");
  res.sendFile(pdfPath);
});

app.get("/html", (req, res) => {
  const payRuns = payRun;
  res.render("generate", { payRuns: payRuns });
});

app.listen(4000, () => {
  console.log("Starting in http://localhost:4000");
});

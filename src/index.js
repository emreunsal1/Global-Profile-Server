import { config } from "dotenv";
import { connectDB } from "./db.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

config();

connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(cookieParser());
console.log(
  'path.join(__dirname, "../gbClient/dist") :>> ',
  path.join(__dirname, "../gbClient/dist")
);
app.use(express.static(path.join(__dirname, "../../gbClient/dist")));

app.use("/api", routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});

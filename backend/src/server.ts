import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connnectDb from "./config/db";
import wigsRoutes from "./routes/wigsRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connnectDb();

app.use("/api/wigs", wigsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
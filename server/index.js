import express from "express";
import router from "./router.js";
import cors from "cors";
import connection, { createTabelSQL } from "./bd/bd.js";

const PORT = 5000;

const app = express();

const start = async () => {
  connection.query(createTabelSQL, (error) => {
    if (error) {
      console.error(error.sqlMessage);
    }
  });
};

app.use(cors());

app.use(express.json());
app.use("/api", router);

app.listen(PORT, start);

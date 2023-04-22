import express from "express";
import router from "./router.js";
import cors from "cors";
import connection, {
  createDateBaseSQL,
  createTableSQL,
  useDateBaseSQL,
} from "./bd/bd.js";

const PORT = 5000;

const app = express();

const start = async () => {
  connection.query(createDateBaseSQL, (error) => {
    if (error) {
      if (error.code === "ER_DB_CREATE_EXISTS") {
        connection.query(useDateBaseSQL);
        return;
      }
      console.error(error);
    }
  });
  connection.query(createTableSQL, (error) => {
    if (error) {
      if (error.code === "ER_TABLE_EXISTS_ERROR") return;
      console.error(error);
    }
  });
};

app.use(cors());

app.use(express.json());
app.use("/api", router);

app.listen(PORT, start);

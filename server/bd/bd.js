import { createConnection } from "mysql2";

export const createDateBaseSQL = "CREATE DATABASE app";
export const useDateBaseSQL = "USE app";
export const createTableSQL =
  "CREATE TABLE `app`.`todos` ( `id` INT NULL AUTO_INCREMENT , `text` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `description` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `isCompleted` BOOLEAN NULL DEFAULT NULL , UNIQUE (`id`)) ENGINE = InnoDB;";

const connection = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "LossChoke321",
});

connection.connect();

export default connection;

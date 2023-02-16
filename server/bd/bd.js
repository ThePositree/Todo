import { createConnection } from "mysql";

export const createTabelSQL =
  "CREATE TABLE `app`.`todos` ( `id` INT NULL AUTO_INCREMENT , `text` VARCHAR(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `description` TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL , `isCompleted` BOOLEAN NULL DEFAULT NULL , UNIQUE (`id`)) ENGINE = InnoDB;";

const connection = createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "",
});

connection.connect();

export default connection;

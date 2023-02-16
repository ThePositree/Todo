import connection from "../bd/bd.js";
let chache = [];
class TodoController {
  getAll(cb) {
    connection.query("SELECT * FROM `todos`", (error, response) => {
      if (error) {
        const message = error.sqlMessage;
        cb(false, { message });
      } else {
        chache = response;
        cb(true, { response });
      }
    });
  }
  addItem(item, cb) {
    connection.query(`INSERT INTO todos (text,description,isCompleted) values ("${item.text}","${item.description}","${item.isCompleted}")`, (error, response) => {
      if (error) {
        const message = error;
        cb(false, { message });
      } else {
        chache.push({ ...item, id: response.insertId });
        cb(true, { response });
      }
    });
  }
  updateItem(item, cb) {
    connection.query(`UPDATE todos SET text = "${item.text}", description = "${item.description}", isCompleted = "${item.isCompleted}" WHERE id = ${item.id}`, (error, response) => {
      if (error) {
        const message = error;
        cb(false, { message });
      } else {
        chache = chache.map((todo) => {
          if (todo.id === item.id) return item;
          return todo;
        });
        cb(true, { response });
      }
    });
  }
  deleteItem(item, cb) {
    connection.query(`DELETE FROM todos WHERE id = ${item.id}`, (error, response) => {
      if (error) {
        const message = error;
        cb(false, { message });
      } else {
        let todoIndex = chache.findIndex((todo) => todo.id === item.id);
        chache.splice(todoIndex, 1);
        cb(true, { response });
      }
    });
  }
  getItemByText(text) {
    return chache.filter((item) => {
      return new RegExp(text, "gi").test(item.text);
    });
  }
}

export const todoController = new TodoController();

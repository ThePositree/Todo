import { todoController } from "../Controllers/TodoController.js";

class TodoServices {
  create(req, res) {
    try {
      const { todo } = req.body;
      const callback = (status, obj) => {
        if (status) {
          res.status(200).json(obj.response);
        } else {
          res.status(500).json(obj.message);
        }
      };
      todoController.addItem({ ...todo, isCompleted: todo.isCompleted ? 1 : 0 }, callback);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  read(req, res) {
    try {
      if (req.query.text !== undefined) {
        const arr = todoController.getItemByText(req.query.text);
        res.status(200).json(arr);
      } else {
        const callback = (status, obj) => {
          if (status) {
            res.status(200).json(obj.response);
          } else {
            res.status(500).json(obj.message);
          }
        };
        todoController.getAll(callback);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  update(req, res) {
    try {
      const { todo } = req.body;
      const callback = (status, obj) => {
        if (status) {
          res.status(200).json(obj.response);
        } else {
          res.status(500).json(obj.message);
        }
      };
      todoController.updateItem({ ...todo, isCompleted: todo.isCompleted ? 1 : 0 }, callback);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  delete(req, res) {
    try {
      const { todo } = req.body;
      const callback = (status, obj) => {
        if (status) {
          res.status(200).json(obj.response);
        } else {
          res.status(500).json(obj.message);
        }
      };
      todoController.deleteItem(todo, callback);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const todoService = new TodoServices();

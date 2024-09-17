import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    todoForm: {
      title: "",
      userId: 1,
      completed: false,
    },
    editId: 0,
    isEdit: false,
  }),
  actions: {
    async getAllTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      this.todos = data;
    },

    async addTodo() {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        this.todoForm
      );
      this.todos.push(data);
      this.todos.reverse();

      this.todoForm.title = "";
    },

    async deleteTodo(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    async getTodo(id) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      this.todoForm.title = data.title;
      this.todoForm.userId = data.userId;
      this.todoForm.completed = data.completed;
      this.editId = data.id;
      this.isEdit = true;
    },

    async updateTodo(id) {
      console.log(id);

      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        this.todoForm
      );

      this.todos.push(data);
      this.todos.reverse();
      this.isEdit = false;

      this.todoForm.title = "";
      this.todoForm.userId = 1;
      this.todoForm.completed = false;
    },

    async toggleComplete(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
  getters: {},
});

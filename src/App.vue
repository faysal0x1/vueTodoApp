<script setup>
/* import All Libraries */
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todo';

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.getAllTodos();
})

</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">

          <div class="card-body">
            <h4 class="card-title text-center">
              Task List
            </h4>

            <div class="row mb-3">
              <form action="">
                <div class="col-md-6">
                  <label for="" class="form-label">
                    <span v-if="!todoStore.isEdit"> Add New Task</span>
                    <span v-else="todoStore.isEdit"> Update Task</span>

                  </label>
                  <input type="text" class="form-control" name="" id="" v-model="todoStore.todoForm.title">
                </div>

                <div class="mt-3" v-if="!todoStore.isEdit">
                  <input type="button" value="Add Task" class="btn btn-success" @click.prevent="todoStore.addTodo()">
                </div> 
                  <div class="mt-3" v-else="todoStore.isEdit">
                  <input type="button" value="Update Task" class="btn" 
                  :class="todoStore.todoForm.completed ? 'btn-success' : 'btn-warning'"
                  @click.prevent="todoStore.updateTodo(todoStore.editId)">
                </div>

              </form>
            </div>

          </div>

          <div class="card-body">
            <h4 class="card-title text-center">
              Tasks
            </h4>

            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center"
                v-for="todo in todoStore.todos" :key="todo.id">

                <div class="mx-2">
                  <input type="checkbox" name="" id="" class="form-check-input me-3">
                  <span :class="todo.completed ? 'text-decoration-line-through' : ''">
                    {{ todo.title }}
                  </span>
                </div>

                <div class="ms-auto">

                  <a href="" class="btn" @click.prevent="todoStore.getTodo(todo.id)">
                    <i class="fa fa-edit
                    "></i>
                  </a>

                  <button class="btn" @click.prevent="todoStore.deleteTodo(todo.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>



              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

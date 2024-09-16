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
                  <label for="" class="form-label"> Add New Task</label>
                  <input type="text" class="form-control" name="" id="">
                </div>
                <div class="mt-3">
                  <input type="button" value="Add Task" class="btn btn-success">
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
                <span :class="todo.completed ? 'text-decoration-line-through':'' ">
                  {{ todo.title }}
                </span>
              
                <a href="" class="btn">
                  <i class="fa fa-trash"></i>
                </a>

              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<template>
    <div>
      <h1>Todo List</h1>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
           <span v-if="todo.priority == 'High'"><span class="circle danger"></span></span> 
           <span v-if="todo.priority == 'Medium'"><span class="circle warning"></span></span> 
           <span v-if="todo.priority == 'Low'"><span class="circle normal"></span></span> 
           <span>{{ todo.title }} - {{ todo.content }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const todos = [
    { id: 1, title: 'Finish homework', content: 'Complete math assignment', priority: 'High' },
    { id: 2, title: 'Read book', content: 'Read new novel', priority: 'Medium' },
    { id: 3, title: 'Exercise', content: 'Go for a run', priority: 'Low' },
    { id: 4, title: 'Clean house', content: 'Do laundry and dishes', priority: 'High' },
  ];
  
  // Computed property to filter high priority todos
  const highPriorityTodos = computed(() => {
    return todos.filter(todo => todo.priority === 'High');
  });
  
  // Computed property to sort todos by priority
  const sortedTodos = computed(() => {
    return todos.slice().sort((a, b) => {
      if (a.priority < b.priority) return -1;
      if (a.priority > b.priority) return 1;
      return 0;
    });
  });
  
  // Computed property to get todos that are both high priority and sorted
  const filteredTodos = computed(() => {
    return highPriorityTodos.value.concat(sortedTodos.value);
  });
  </script>
  
  <style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    ul li{
        font-size: 16px;
        line-height: 30px;
        display: flex;
        align-items: center;
    }
    .circle{
        width: 15px;
        height: 15px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 20px;
    }
    .danger{
        background: red;
        border: 2px solid rgb(127, 7, 7);
    }
    .warning{
        background: rgb(239, 189, 8);
        border: 2px solid rgb(185, 155, 4);
    }
    .normal{
        background: rgb(69, 147, 226);
        border: 2px solid rgb(19, 16, 179);
    }
  </style>
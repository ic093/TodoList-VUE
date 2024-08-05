<script setup>
    import {ref} from 'vue'
    import { useTodoStore } from '../stores/todo_states'
    import { storeToRefs } from 'pinia'
    const newTodo = ref("")
    const todoStore = useTodoStore()
    const { todos } = storeToRefs(todoStore)
    const { completedTodos } = storeToRefs(todoStore)
    const { addTodo, toggleTodo} = todoStore
    </script>
    
    <template>
     <main>
      <input type="text" v-model="newTodo"/>&nbsp;
      <button @click="addTodo(newTodo)">Add</button>
      <div v-for="todo in todos">
        <div class="items">
          <div class="toggle" v-if="todo.isFinished" @click="todoStore.toggleTodo(todo.id)"><i class="fa-solid fa-2x fa-square-check"></i>&nbsp;</div>
          <div class="toggle" v-else @click="todoStore.toggleTodo(todo.id)"><i class="fa-regular fa-2x fa-square"></i>&nbsp;</div>
          <h3 :style="todo.isFinished && { textDecoration: 'line-through' }">{{ todo.text }}</h3>
        </div>
        
      </div>
      <div>
          <h3>已完成待辦清單:</h3>
          <ul class="finished">
              <li v-for="(todo2, index) in completedTodos" :key="index">
              {{ todo2.text }}
              </li>
          </ul>
      </div>
     </main>
    </template>
    
    <style scoped>
    input{
      height: 30px;
      border-radius: 8px;
      font-size: 18px;
      padding: 5px;
    }
    .items{
      display:flex;
      justify-content: flex-start;
      align-items: center;
    }
    .items i{
      margin-right: 15px;
    }
    .toggle{
      cursor: pointer;
    }
    .line-through{
      text-decoration: line-through;
    }
    h3{
        text-align: left;
    }
    .finished{
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .finished li{
        font-size: 18px;
        font-weight: bold;
        color: brown;
    }
    </style>
    
import { defineStore } from 'pinia'

export const useTodoStore = defineStore ( "todos", {
    state: () => ({
        todos: [
          {
            id: 1,
            text: 'clean room',
            isFinished: false
          }]
    }),
    getters: {
      completedTodos(state) {
        console.log(state)
        return state.todos.filter(todo => todo.isFinished);
      },
    },
    actions: {
      addTodo(text) {
        if (!text) return;
        this.todos.push({
          id: Math.floor(Math.random() * 100000),
          text,
          isFinished: false
        })
      },
      toggleTodo(id){
        const index = this.todos.findIndex((todo) => todo.id === id )
        this.todos[index].isFinished = !this.todos[index].isFinished
      }
    }
} )
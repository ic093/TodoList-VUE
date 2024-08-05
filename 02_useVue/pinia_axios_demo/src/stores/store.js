import { defineStore} from 'pinia'

export const todoStore = defineStore ("todos", {
    state: () =>({
        todos:[
            {
                id: 1,
                text: '完成作業',
                isFinished: false
            }
        ]
    }),
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => todo.isFinished)
        }
    },
    actions: {
        addTodo(text){
            if(!text) return;
            this.todos.push({
                id: Math.floor(Math.random() * 100000),
                text,
                isFinished: false
            })
        },
        toggleTodo(id){
            const index = this.todos.findIndex((todo) => todo.id === id)
            this.todos[index].isFinished = !this.todos[index].isFinished
        }
    }
    
})
import { defineStore } from "pinia";
export const testStore = defineStore('list',{
    state: ()=>({
        //儲存狀態的各個變數
        todos:[
            {
            id:1,
            text:'完成練習',
            isFinished: false
        },
        {
        id:2,
        text:'整理房間',
        isFinished: false
    },
    {
        id:3,
        text:'洗碗',
        isFinished: true
    },
    {
        id:4,
        text:'運動',
        isFinished: true
    }
    ]
    }),
    getters:{
        //需要被讀取的資料涵式

        finishedTodos(state){
            return state.todos.filter(todo=>todo.isFinished)
        }
    },
    actions :{
        //變更資料狀態的涵式區
        addTodo(text){
            if(text.length==0) return
            this.todos.push({
                id:Math.floor(Math.random()*10000),
                text: text,
                isFinished: false
            })
        }
    }
})
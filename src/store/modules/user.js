export default{
    state:()=>({
        todos:[]
    }),
    mutations:{
        storeTodos(state,payload){
            state.todos = payload
        },
        updade(state,data){
            const index =state.todos.findIndex(todo=>todo.id===data.id)
            if (index>=0){
                state.todos.splice(index,1,data)
            }else{
                state.todos.unshift(data)
            }
            
        },
        deleteTodo(state,id){
            const index =state.todos.findIndex(todo=>todo.id===id)

            if(index>=0){
                state.todos.splice(index,1)
            }
        },
        
      
          
        
    },
    getters:{},
   
    actions:{
        
        
        
    }
}
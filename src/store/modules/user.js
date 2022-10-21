export default{
    state:()=>({
        todos:[]
    }),
    mutations:{
        storeTodos(state,payload){
            state.todos = payload
        },
        updade(state,data){
            state.todos.unshift(data)
        },
        updadeTodo(state,{data}){
           
        }
      
          
        
    },
    getters:{},
   
    actions:{
        
        
        
    }
}
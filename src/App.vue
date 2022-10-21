
<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <!-- Todo spinner -->
           <TodoSpinner v-if="loading"/>
            <!--/ Todo spinner -->

            <!-- Todo form -->
            <template v-else>
                <TodoForm/>
                <!--/ Todo form -->
                <!-- Todo items -->
                <TodoItens v-if="$store.state.user.todos.length"/>
                <!--/ Todo items -->
                <!-- Todo empty -->
                <TodoEmpty v-else/>
                <!--/ Todo empty -->
            </template>
        </div>
    </div>
    <!--/ Content -->
</template>
<script >
    import TodoSpinner from './components/TodoSpinner.vue'
    import TodoForm from './components/TodoForm.vue'
    import TodoItens from './components/TodoItens.vue'
    import TodoEmpty from './components/TodoEmpty.vue';
    
    
    export default {
        name:"App",
        components:{
            TodoEmpty,
            TodoForm,
            TodoItens,
            TodoSpinner,
        },    
        data(){
            return{
                loading:false
            }
        },
        methods:{
            
           async createLista (){
             const req = await fetch('http://localhost:3000/todos')
             const data = await req.json()
        
                this.$store.commit('storeTodos',data)
                this.loading =false
                
           },

        },
        mounted(){
            this.createLista()
        }
        
    }
       
    
</script>



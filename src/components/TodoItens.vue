<template>
    <div class="space-y-2">
        <TodoIten v-for="todo in $store.state.user.todos" :key="todo.id" :todo="todo"/>
    </div>
</template>
<script>
     import TodoIten from "./TodoIten.vue";
     export default{
        components:{TodoIten}
     }
</script>
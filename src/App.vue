<script setup>
import TodoSpinner from './components/TodoSpinner.vue'
import TodoForm from './components/TodoForm.vue'
import TodoItens from './components/TodoItens.vue'
import TodoEmpty from './components/TodoEmpty.vue';
</script>

<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <!-- Todo spinner -->
           <TodoSpinner/>
            <!--/ Todo spinner -->

            <!-- Todo form -->
            <TodoForm/>
            <!--/ Todo form -->

            <!-- Todo items -->
            <TodoItens/>
            <!--/ Todo items -->

            <!-- Todo empty -->
            <TodoEmpty/>
            <!--/ Todo empty -->
        </div>
    </div>
    <!--/ Content -->
</template>


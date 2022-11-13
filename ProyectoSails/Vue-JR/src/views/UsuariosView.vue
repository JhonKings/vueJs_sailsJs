<script setup>
import UserList  from '../components/UserList.vue'
</script>

<template>
    <main>
        <div class="titulo">Funcionarios</div>
        <UserList/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>
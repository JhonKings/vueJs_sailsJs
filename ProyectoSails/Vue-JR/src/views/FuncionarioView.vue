<script setup>
import FuncionarioList  from '../components/FuncionarioList.vue'
</script>

<template>
    <main>
        <div class="titulo">Funcionarios</div>
        <FuncionarioList/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>
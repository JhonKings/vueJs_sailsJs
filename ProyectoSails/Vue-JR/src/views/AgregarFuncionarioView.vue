<script setup>
import FuncionarioForm  from '../components/FuncionarioForm.vue'

</script>

<template>
    <main>
        <div class="titulo">Agregar Funcionario</div>
        <FuncionarioForm :is-agregar="true"/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>

<script setup>
import UserForm  from '../components/UsuarioForm.vue'
</script>

<template>
    <main>
        <div class="titulo">Agregar hola</div>
        <UserForm :is-agregar="true"/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>
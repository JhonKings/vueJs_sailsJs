<script setup>
import UnidadForm  from '../components/UnidadForm.vue'
</script>

<template>
    <main>
        <div class="titulo">Modificar Unidad</div>
        <UnidadForm :is-agregar="false"/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>
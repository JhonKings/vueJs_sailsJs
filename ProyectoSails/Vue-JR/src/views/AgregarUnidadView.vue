<script setup>
import UnidadForm from '../components/UnidadForm.vue'
</script>

<template>
    <main>
        <div class="titulo">Agregar Unidad</div>
        <UnidadForm :is-agregar="true"/>
    </main>
</template>
<style>
    .titulo{
        width: 99%;
        text-align: left;
        font: 2em sans-serif bold;
    }
</style>
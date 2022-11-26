<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main>
        <div class="main-menu">
            <RouterLink to="/funcionarios" >Funcionarios</RouterLink>
            <RouterLink to="/unidades" >Unidades</RouterLink>
        </div>
    </main>
</template>

<style>

    .main-menu{
        width:100%;
        height: auto;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 20px;
        background-color: black;
    }

    .main-menu a{
        display: inline;
        padding: 5px ;
        padding-left: 20px;
        padding-right: 20px;
        margin-right: 3px;
        background-color: grey;
        border:1px solid black;        
        color: black;
        font-weight: 500;
    }

    .main-menu a:hover{
        background-color: aliceblue;
        color: black;
    }
</style>
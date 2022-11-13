<script>
import { RouterLink } from 'vue-router'

export default {
    data(){
        return{
            usuarios: []
        }
    },
    methods:{
        async eliminarUsuario(event){
            let confirmElimin = confirm('Esta seguro que desea eliminar?');

            if(confirmElimin){
                let idEliminar = event.target.dataset.id;

                await fetch ("http://localhost:1337/user/"+idEliminar,{
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache'
                });

                alert('Funcionario eliminado correctamente');

                let resp = await fetch ("http://localhost:1337/user",{
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache'
                });
                this.usuarios = await resp.json();

            }
            

        }
        
    },
    async mounted(){

        let resp = await fetch ("http://localhost:1337/user",{
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
        this.usuarios = await resp.json();
    }
}
</script>

<template>
    <main>
        <div class="button-add-container">
            <RouterLink to="/agregar-usuario"><button>Agregar</button></RouterLink>
        </div>
        <table>
            <tr>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>RUT</td>
                <td>Fecha Nacimiento</td>
                <td>Dirección</td>
                <td>Genero</td>
                <td>Acciones</td>
            </tr>
            <tr v-for="user in usuarios">
                <td>{{user.name}}</td>
                <td>{{user.apellido}}</td>
                <td>{{user.rut}}</td>
                <td>{{user.fechaNacimiento}}</td>
                <td>{{user.direccion}}</td>
                <td>{{user.genero}}</td>
                <td>
                    <RouterLink :to="'/modificar-usuario/'+user.id"><button>Modificar</button></RouterLink>
                    <button @click="eliminarUsuario" :data-id="user.id">Eliminar</button>
                </td>
            </tr>
        </table>
    
    </main>
</template>
<style scoped>
    .button-add-container{
        width: 99%;
        text-align: right;
    }
    table {
        width: 100%;
        margin-top: 20px;
    }
    table, th, td {
        border: 1px solid black;
    }
</style>
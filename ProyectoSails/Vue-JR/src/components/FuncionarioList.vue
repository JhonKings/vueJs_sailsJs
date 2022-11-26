<script>
import { RouterLink } from 'vue-router'

export default {
    data(){
        return{
            funcionarios: []
        }
    },
    methods:{
        async eliminarFuncionarios(event){
            let confirmElimin = confirm('Esta seguro que desea eliminar este Funcionario?');

            if(confirmElimin){
                let idEliminar = event.target.dataset.id;

                await fetch ("http://localhost:1337/funcionarios/"+idEliminar,{
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache'
                });

                alert('Funcionario eliminado correctamente');

                let resp = await fetch ("http://localhost:1337/funcionarios",{
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache'
                });
                this.funcionarios = await resp.json();

            }
            

        }
        
    },
    async mounted(){

        let resp = await fetch ("http://localhost:1337/funcionarios",{
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
        this.funcionarios = await resp.json();
    }
}
</script>

<template>
    <main>
        <div class="button-add-container">
            <RouterLink to="/agregar-funcionario"><button>Agregar</button></RouterLink>
        </div>
        <table>
            <tr>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>RUT</td>
                <td>Perfil</td>
                <td>Unidad</td>
                <td>Acciones</td>
            </tr>
            <tr v-for="user in funcionarios">
                <td>{{user.nombre}}</td>
                <td>{{user.apellido}}</td>
                <td>{{user.rut}}</td>
                <td>{{user.perfil}}</td>
                <td>{{user.unidadAdministrativa != ""?user.unidadAdministrativa.titulo:""}}</td>
                <td>
                    <RouterLink :to="'/modificar-funcionario/'+user.id"><button>Modificar</button></RouterLink>
                    <button @click="eliminarFuncionarios" :data-id="user.id">Eliminar</button>
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
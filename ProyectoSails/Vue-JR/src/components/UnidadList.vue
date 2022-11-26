<script>
import { RouterLink } from 'vue-router'

export default {
    data(){
        return{
            unidades: []
        }
    },
    methods:{
        async eliminarUnidades(event){
            let confirmElimin = confirm('Esta seguro que desea eliminar esta Unidad?');

            if(confirmElimin){
                let idEliminar = event.target.dataset.id;

                await fetch ("http://localhost:1337/unidades/"+idEliminar,{
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache'
                });

                alert('Unidad eliminada correctamente');

                let resp = await fetch ("http://localhost:1337/unidades",{
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache'
                });
                this.unidades = await resp.json();

            }
            

        }
        
    },
    async mounted(){

        let resp = await fetch ("http://localhost:1337/unidades",{
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
        this.unidades = await resp.json();
    }
}
</script>

<template>
    <main>
        <div class="button-add-container">
            <RouterLink to="/agregar-unidad"><button>Agregar</button></RouterLink>
        </div>
        <table>
            <tr>
                <td>Titulo</td>
                <td>Descripción</td>
                <td>Unidad Padre</td>
                <td>Funcionario</td>
                <td>Acciones</td>
            </tr>
            <tr v-for="user in unidades">
                <td>{{user.titulo}}</td>
                <td>{{user.descripcion}}</td>
                <td>{{user.unidadPadre!=null? user.unidadPadre.titulo:""}}</td>
                <td>
                    <ul v-if="user.listaFuncionario !=null">
                        <li v-for="funcionario in user.listaFuncionario">
                            {{funcionario.nombre}} {{funcionario.apellido}}
                        </li>
                    </ul>
                </td>
                <td>
                    <RouterLink :to="'/modificar-unidad/'+user.id"><button>Modificar</button></RouterLink>
                    <button @click="eliminarUnidades" :data-id="user.id">Eliminar</button>
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
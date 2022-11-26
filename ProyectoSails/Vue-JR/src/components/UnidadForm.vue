<script >
import { RouterLink } from 'vue-router'

export default {
    props:{
        isAgregar:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return{
            idUnidad: null,
            textoBoton : "",
            titulo : "",
            descripcion : "",
            unidadPadre : "",
            idUnidadAdministrativa : "",   
            unidadesAdministrativa: []
        }
    },
    methods:{
        async guardar(e){
            if (this.titulo.trim().length == 0){
                alert("Agregue un Titulo");
            }
            if (this.descripcion.trim().length == 0){
                alert("Agregue un Apellido");
            }
            if(typeof(this.idUnidadAdministrativa)== 'string'){
                this.idUnidadAdministrativa =null;
            }

            let data = {
                "titulo":this.titulo,
                "descripcion":this.descripcion,
                "unidadPadre":this.idUnidadAdministrativa,

            }

            let url = "http://localhost:1337/unidades";

            if (!this.isAgregar){
                url += '/'+this.idUnidad;
            }

            let method = this.isAgregar?"POST":"PATCH";
            
            await fetch(
                url,
                {
                    method: method,
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });  
            
            alert('Guardado correctamente.');

            this.$router.push({name:'unidades'});
        }
    },
    async mounted(){
        if (this.isAgregar){
            this.textoBoton = "Agregar";
            
        }else{
            try{
                this.idUnidad=parseInt(this.$route.params.id);
            }catch(exception){
                this.idUnidad = null;
            }
            this.textoBoton = "Modificar";

            if(this.idUnidad != null){
                let respuesta = await fetch(
                    "http://localhost:1337/unidades/"+this.idUnidad,
                    {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache'
                    });

                let datosModificar = await respuesta.json();

                this.idUnidad = datosModificar.id;
                this.titulo = datosModificar.titulo;
                this.descripcion = datosModificar.descripcion;
                this.idUnidadAdministrativa = datosModificar.unidadPadre!=null?datosModificar.unidadPadre.id:"";
                    
            }
        }

        let selectUnidades = await fetch(
                    "http://localhost:1337/unidades/",
                    {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache'
                    });
        this.unidadesAdministrativa = await selectUnidades.json();
    }
}

</script>

<template>
    <main>
        
        <table>
            <tr>
                <td>Titulo</td>
                <td><input type="text" v-model="titulo"/> </td>
            </tr>
            <tr>
                <td>Descripción</td>
                <td><input type="text" v-model="descripcion"/> </td>
            </tr>
            <tr>
                <td>Unidad</td>
                <td>   
                    <select v-model="idUnidadAdministrativa">
                        <option value="">-- Seleccione --</option>  
                        <option v-for="unidad in unidadesAdministrativa" :value="unidad.id">{{unidad.titulo}}</option>
                    </select> 
                </td>
            </tr>
        </table>
        <div class="buttons-container">
            <button @click="guardar">{{textoBoton}}</button>
            <RouterLink to="/unidades"><button>Cancelar</button></RouterLink>
        </div>
    
    </main>
</template>
<style scoped>
    .buttons-container{
        width: 99%;
        text-align: right;
    }
    table {
        width: 100%;
        margin-top: 20px;
    }
</style>
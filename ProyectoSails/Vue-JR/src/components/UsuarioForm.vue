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
            idUsuario: null,
            textoBoton : "",
            nombre : "",
            apellido : "",
            rut : "",
            fecNacimiento : "",
            direccion : "",
            genero : "",
        }
    },
    methods:{
        async guardar(e){
            if (this.nombre.trim().length == 0){
                alert("Agregue un Nombre");
            }
            if (this.apellido.trim().length == 0){
                alert("Agregue un Apellido");
            }
            if (this.rut.trim().length == 0){
                alert("Agregue un RUT");
            }
            if (this.fecNacimiento.trim().length == 0){
                alert("Agregue una Fecha de Nacimiento");
            }
            if (this.direccion.trim().length == 0){
                alert("Agregue una Direccion");
            }
            if (this.genero.trim().length == 0){
                alert("Agregue un Genero");
            }

            let data = {
                "name":this.nombre,
                "apellido":this.apellido,
                "rut":this.rut,
                "fechaNacimiento":this.fecNacimiento,
                "direccion":this.direccion,
                "genero":this.genero
            }

            let url = "http://localhost:1337/user";

            if (!this.isAgregar){
                url += '/'+this.idUsuario;
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

            this.$router.push({name:'usuarios'});
        }
    },
    async mounted(){
        if (this.isAgregar){
            this.textoBoton = "Agregar";
            
        }else{
            try{
                this.idUsuario=parseInt(this.$route.params.id);
            }catch(exception){
                this.idUsuario = null;
            }
            this.textoBoton = "Modificar";

            if(this.idUsuario != null){
                let respuesta = await fetch(
                    "http://localhost:1337/user/"+this.idUsuario,
                    {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache'
                    });

                let datosModificar = await respuesta.json();

                this.idUsuario = datosModificar.id;
                this.nombre = datosModificar.name;
                this.apellido = datosModificar.apellido;
                this.rut = datosModificar.rut;
                this.fecNacimiento = datosModificar.fechaNacimiento;
                this.direccion = datosModificar.direccion;
                this.genero = datosModificar.genero;
                    
            }
        }
    }
}

</script>

<template>
    <main>
        
        <table>
            <tr>
                <td>Nombre</td>
                <td><input type="text" v-model="nombre"/> </td>
            </tr>
            <tr>
                <td>Apellido</td>
                <td><input type="text" v-model="apellido"/> </td>
            </tr>
            <tr>
                <td>RUT</td>
                <td><input type="text" v-model="rut"/> </td>
            </tr>
            <tr>
                <td>Fecha Nacimiento</td>
                <td><input type="text" v-model="fecNacimiento"/> </td>
            </tr>
            <tr>
                <td>Dirección</td>
                <td><input type="text" v-model="direccion"/> </td>
            </tr>
            <tr>
                <td>Genero</td>
                <td><input type="text" v-model="genero"/> </td>
            </tr>
        </table>
        <div class="buttons-container">
            <button @click="guardar">{{textoBoton}}</button>
            <RouterLink to="/usuarios"><button>Cancelar</button></RouterLink>
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
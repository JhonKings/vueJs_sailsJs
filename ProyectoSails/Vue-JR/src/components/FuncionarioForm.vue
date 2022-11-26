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
            idFuncionario: null,
            textoBoton : "",
            nombre : "",
            apellido : "",
            rut : "",
            contrasena : "",
            perfil : "",
            logSesion : "",
            idUnidadAdministrativa : "",            
            cargo : "",
            unidadesAdministrativa: []
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
            if (this.contrasena.trim().length == 0){
                alert("Agregue una contraseña");
            }
            if (this.perfil.trim().length == 0){
                alert("Agregue una Perfil");
            } 
            if (typeof(this.idUnidadAdministrativa) != 'number'){
                alert("Agregue un Unidad");
            }                       
            /*if (this.cargo.trim().length == 0){
                alert("Agregue un Cargo");
            }*/

            //log Sesion
            let fecha_actual;
            let hora_actual;
            let logSesion;

            let hoy = new Date();
            let dd = hoy.getDate();
            let mm = hoy.getMonth()+1;
            let yyyy = hoy.getFullYear();
            let hh = hoy.getHours();
			let mi = hoy.getMinutes();

            if(dd<10) {
                    dd='0'+dd;
            }
            if(mm<10) {
                    mm='0'+mm;
            }
			if(hh<10) {
					hh='0'+hh;
			}
			if(mi<10) {
					mi='0'+mi;
			}

            //fecha_actual = yyyy+'/'+mm+'/'+dd;
			fecha_actual = dd+'/'+mm+'/'+yyyy;
			hora_actual = hh+':'+mi+':00';

            logSesion = fecha_actual+' '+hora_actual;

            let data = {
                "nombre":this.nombre,
                "apellido":this.apellido,
                "rut":this.rut,
                "contrasena":this.contrasena,
                "perfil":this.perfil,
                "logSesion":this.logSesion,                
                "unidadAdministrativa":this.idUnidadAdministrativa
                //"cargo":this.cargo
            }

            let url = "http://localhost:1337/funcionarios";

            if (!this.isAgregar){
                url += '/'+this.idFuncionario;
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

            this.$router.push({name:'funcionarios'});
        }
    },
    async mounted(){
        if (this.isAgregar){
            this.textoBoton = "Agregar";
            
        }else{
            try{
                this.idFuncionario=parseInt(this.$route.params.id);
            }catch(exception){
                this.idFuncionario = null;
            }
            this.textoBoton = "Modificar";

            if(this.idFuncionario != null){
                let respuesta = await fetch(
                    "http://localhost:1337/funcionarios/"+this.idFuncionario,
                    {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache'
                    });

                let datosModificar = await respuesta.json();

                this.idFuncionario = datosModificar.id;
                this.nombre = datosModificar.nombre;
                this.apellido = datosModificar.apellido;
                this.rut = datosModificar.rut;
                this.contrasena = datosModificar.contrasena;
                this.perfil = datosModificar.perfil;
                this.unidadAdministrativa = datosModificar.unidadAdministrativa;
                //this.cargo = datosModificar.cargo;
                    
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
                <td>Contraseña</td>
                <td><input type="password" v-model="contrasena"/> </td>
            </tr>           
            <tr>
                <td>Perfil</td>
                <td><input type="text" v-model="perfil"/> </td>
            </tr>
            <tr>
                <td>Unidad Administrativa</td>
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
            <RouterLink to="/funcionarios"><button>Cancelar</button></RouterLink>
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
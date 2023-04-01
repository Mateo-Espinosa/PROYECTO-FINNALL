<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="2048">
      <template v-slot:activator="{ props }">
        <v-card-text class="text-center">
          <v-btn
            class="boton-login text-white"

            rel="noopener noreferrer"
            v-bind="props"
           
          >
          Regístrate ahora
          <v-icon icon="mdi-chevron-right"></v-icon>
        </v-btn>
         
        </v-card-text>
      </template>
      <v-card class="form bg-black" width="450"  rounded="lg">
    
        <v-card-text>
          <v-container>
            <v-row class="dato">
              <v-col cols="12" sm="6" md="12">
                <v-text-field variant="outlined" label="Nombre Completo" required v-model="nombre"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-text-field variant="outlined" label="Correo electrónico" required type="email" autocomplete="username" v-model="correo"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-text-field variant="outlined" label="Contraseña" type="password" required v-model="contrasena"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['0-16', '17-29', '+30']" label="Edad*" required v-model="edad"></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete :items="['Consola', 'Pc', 'Movil']" label="Tu Plataforma" multiple v-model="plataformas"></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="botones-action">
          <v-spacer></v-spacer>
          <v-btn color="white" class="botonaccionc" variant="plain" @click="cerrar">Cerrar</v-btn>
          <v-btn color="white" class="botonaccionc" variant="plain" yy @click="registrar">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
 import store from '@/store/store';
import axios from 'axios';
export default {
  data: () => ({
    dialog: false,
    nombre: '',
    correo: '',
    contrasena: '',
    edad: '',
    plataformas: [],
    gustos: []
  }),
  methods: {
    registrar() {
  if (!this.nombre || !this.correo || !this.contrasena || !this.edad) {
    alert('Por favor llene todos los campos obligatorios.');
    return;
  }
  
  if (!this.correo.includes('@')) {
    alert('Por favor ingrese un correo electrónico válido.');
    return;
  }
 
  axios.post('http://localhost:3000/registro', {
    nombre: this.nombre,
    correo: this.correo,
    contrasena: this.contrasena,
    edad: this.edad,
    plataformas: this.plataformas,
    gustos: this.gustos
    
  })
    .then(response => {
      console.log(response.data);
      this.dialog = false;
      store.commit('actualizarCorreo', this.correo);
      this.$router.push('/principal');
      alert('Usuario registrado con exito!');
    })
    .catch(error => {
      console.log(error);
    });
},
    cerrar() {
      if (confirm('¿Está seguro de que desea cancelar el registro?')) {
        this.dialog = false;
      }
    }
  }
};
</script>
<style scoped>

.boton-login {
  width: 200px;
 background-color: transparent;
 margin-top: .5%;
 margin-left: 2%;
}   
.boton-login:hover {
 background-color: #D500F9;
 box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
}   
  .form {
    background: url('../assets/1.gif');
    background-size: cover;
    opacity: 0.95;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-position: 50%;
   
  }
  .dato{
    background-color: rgba(0, 0, 0, 0.500);
    border-radius: 7px;
  }
  .botonaccionc {
background-color: transparent;
margin-top: -3%;
  }
  .botonaccionc:hover {
background-color: #D500F9;
box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
  }
</style>
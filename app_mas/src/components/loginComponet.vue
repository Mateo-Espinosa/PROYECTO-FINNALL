<template>
    <div class="hero">

      <div>
        <v-headline class="titulo">MAS GAMING</v-headline>
      </div>
      <v-card
        class="mx-auto pa-12 pb-8 bg-black fondo-form"
        elevation="5"
        max-width="448"
        rounded="lg"
      >
      <v-row class="dato">
        
        <v-col cols="12" sm="6" md="12">
            <v-text-field class="input-field"  prepend-inner-icon="mdi-email"  variant="outlined" label="Correo electrónico" required type="email" autocomplete="username" v-model="correo"></v-text-field>
          </v-col>

       <v-col cols="12" sm="6" md="12">
        <v-text-field 
         variant="outlined"
        label="Contraseña"
        prepend-inner-icon="mdi-lock"
        required v-model="contrasena"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        @click:append-inner="visible = !visible"
           >
        </v-text-field>
      </v-col>
        <v-btn
          class="boton-login"
          color="white"
          variant="plain"
          @click="login"
        
        >
        Iniciar sesion
        </v-btn>
        <v-row class="rows">
      
    </v-row>
    </v-row>
        <v-row v-if="error" class="mt-5">
            <v-col cols="12">
              <v-alert type="error">{{ error }}</v-alert>
            </v-col>
          </v-row>
      </v-card>
      
      <formRegistroView/>

    </div>
  </template>
  
  <script>
  import formRegistroView from './formRegistro.vue'
  import store from '@/store/store';
  export default {
    data: () => ({
      dialog: false,
      correo: '',
      contrasena: '',
      error: '',
      visible: false,
    }),
    components: {
    formRegistroView
  },
    methods: {
      login() {
        this.error = '';
        if (!this.correo || !this.contrasena) {
          this.error = 'Por favor complete todos los campos';
          return;
        }
        const datos = { correo: this.correo, contrasena: this.contrasena };
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        }).then(response => {
          if (response.ok) {
            response.json().then(data => {
    this.dialog = false;
    this.$router.push(data.redirect);
     store.commit('actualizarCorreo', this.correo);
  });
  
          } else {
            response.text().then(error => {
              this.error = error;
            });
          }
        })
      },
      cerrar() {
        if (confirm('¿Estas seguro que no deseas iniciar sesion?')) {
          this.dialog = false;
        }
      }
    }
  }
  </script>

<style scoped>

@font-face {
  font-family: 'Mokoto';
  src: url('../assets/FONTS/masd.otf') format('woff');
}

.dato{
  background-color: rgba(0, 0, 0, 0.600);
  height: 40vh;
  border-radius: 7px;
}
.alerta {
   margin-top: -70px;
   margin-left: 20px;
}
.boton-login {
    margin-top: -3%;
    margin-left: 25%;
    width: 180px;
    background-color: transparent;
}   
.boton-login:hover {
   background-color: #D500F9;
   transition-delay: .1s;
   box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
}   
.hero {
        background-color: black;
        background: url('../assets/retro.png');
        background-size: cover;
        height: 100vh;
      }
      .fondo-form {
        background: url('../assets/retro.png');
        background-size: cover;
        height: 62vh;
        background-position: 50%;
        opacity: 0.95;
        margin-top: 3%;
      }

  .icon {
    background-color: black;
    width: 210px;
    height: 100px;
    margin-left: 10%;
  }
  .titulo {
    color: white;
    margin-left: 37%;
    font-family: Mokoto;
    text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 80px #D500F9;
    font-size: 40px;
    position: relative;
    top: 10px;
    display: inline-block;
    cursor: pointer;
  }

  .titulo:hover {

    text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 10px #df29ff;
  }

</style>
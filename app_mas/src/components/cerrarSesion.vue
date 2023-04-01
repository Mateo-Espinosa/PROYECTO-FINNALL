<template>
    <div class="text-center">
      <v-menu 
        v-model="menu"
        :close-on-content-click="false"
        location="end"
      >
        <template v-slot:activator="{ props }" >
          <v-btn
                class="boton-cerrar "
                variant="plain"
                v-bind="props"
                color="white"
              >
                Salir
            </v-btn>
             
        </template>
  
        <v-card min-width="320" class="bg-black">
          <v-list class="bg-black">
            <v-list-item
              prepend-avatar="https://pbs.twimg.com/profile_images/1337826302284320768/wCDGzvO8_400x400.jpg"
              title="usuario"
            >
            <div class="subtitle">
              <p>{{correo}}</p>
            </div>
         
              <template v-slot:append>
              </template>
            </v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list
          class="bg-black">
            <v-list-item>
              <v-switch class="interrurptor"
                v-model="message"
                color="purple"
                label="Cerrar Sesion"
                hide-details
              ></v-switch>
            </v-list-item>
          </v-list>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
            class="boton-end"
            color="white"
              variant="plain"
              @click="menu = false"
            >
              Cancelar
            </v-btn>
            <v-btn
            class="boton-end"

              color="white"
              variant="plain"
              @click="menuSave"
            >
              Confirmar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
  
      <v-dialog
        v-model="loadingDialog"
        :scrim="false"
        persistent
        width="auto"
      >
        <v-card color="primary">
          <v-card-text class="alertC">
            {{ saving ? 'Cerrando sesión...' : 'sesión cerrada ' }}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
    export default {
      name: 'cerrarS',
      computed: {
    correo() {
      return this.$store.state.correo;
    },
  },
      data () {
        return {
          menu: false,
          fav: false,
          message: false,
          saving: false,
          loadingDialog: false,
        }
      },
  
      methods: {
        saveData() {
          if (this.message) {
            this.$router.push('/');
          } else {
            alert('Confirma si deseas cerrar sesion.');
          }
          this.menu = false;
        },
  
        menuSave() {
          if (!this.message) {
            alert('Activa el interruptor para confirmar');
            return;
          }
          this.saving = true
          this.loadingDialog = true
  
          setTimeout(() => {
            this.saving = false
            this.loadingDialog = false
            this.menu = false
            this.saveData();
          }, 2800) //tiempo para cerrar la sesion
        },
      },
    }
  </script>
  
  <style scoped>
  .boton-cerrar {
    background-color: transparent;
    margin-left: 500%;
  }

  .boton-cerrar:hover {
    background-color: #D500F9;
    transition-delay: .1s;
    box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
 }   
 .interrurptor {
margin-left: 5%;

 }
 .boton-end {
    margin-top: -3%;
    margin-left: 25%;
    background-color: transparent;
}   
.boton-end:hover {
   background-color: #D500F9;
   transition-delay: .1s;
   box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
}   

.subtitle {
  font-size: 12px;
}
.alertC {
  background-color: #D500F9;
  box-shadow: 0 0 10px #D500F9;
 border: .1px solid white;
}

 
</style>
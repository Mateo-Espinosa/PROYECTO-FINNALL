
<template>
  <div>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="bg-teal-lighten-5">
      <v-btn v-for="(item,index) in rutas" :key="index"
      @click="url(item.ruta)"
      class="bg-teal-lighten-2 ma-5 my-4"
      prepend-icon="mdi-vuetify" 
      variant="tonal"
      >
      <span>{{ item.nombre }}</span>
    </v-btn>
    </v-navigation-drawer>

    <v-app-bar class="bg-teal-lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text">Apartado de Ayuda</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</div>
</template>

<script>
  export default {
      name: 'nav_bar',
    data: () => ({ 
      drawer:false, 
    rutas: [
      {nombre : "home", ruta : '/'},
      {nombre : "help", ruta : '/help'}
    ]
   }),
    methods: {
      url(ruta){
        this.$router.push(ruta)
      }
    }
  }
</script>

<style scoped>
.text {
  font-weight: 300;
  letter-spacing: .1cm;
  
}
</style>
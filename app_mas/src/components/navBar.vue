<template>
  <div>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="bg-teal-lighten-5">
      <slot name="drawer"></slot>
    </v-navigation-drawer>

    <v-app-bar class="bg-teal-lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text">Proyecto - MAS</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot name="main"></slot>
      <slot name="footer"></slot>
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
        {nombre : "info", ruta : '/info'},
        {nombre : "about", ruta : '/about'},
        {nombre : "help", ruta : '/help'},
        {nombre : "contact", ruta : '/contact'}
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
<template>
    <div>
    <v-btn v-for="(item,index) in rutas" :key="index"
      @click="url(item.ruta)"
      class="bg-teal-lighten-2 ma-5 my-4"
      prepend-icon="mdi-vuetify" 
      variant="tonal"
      >
      <span>{{ item.nombre }}</span>
    </v-btn>
    </div>
</template>
<script>
export default {
      name: 'VBtn',
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

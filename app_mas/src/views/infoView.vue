<template>
  <plantillaPrincipal>
    <calificacionBase />
  </plantillaPrincipal>
  </template>
  
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  // import AyudaPlis from '@/components/helpPagin.vue';
  import plantillaPrincipal from '@/components/plantillaPrincipal.vue';
  import calificacionBase from '@/components/calificacionBase.vue';
  
  export default defineComponent({
    name: 'helpView',
  
    components: {
      plantillaPrincipal,
      calificacionBase
    },
  });
  </script>

<template>
  <plantillaPrincipal>
    <paginacionBase />
  </plantillaPrincipal>
  </template>
  
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  // import AyudaPlis from '@/components/helpPagin.vue';
  import plantillaPrincipal from '@/components/plantillaPrincipal.vue';
  import paginacionBase from '@/components/paginacionBase.vue';
  export default defineComponent({
    name: 'helpView',
  
    components: {
      plantillaPrincipal,
      paginacionBase
    },
  });
  </script>
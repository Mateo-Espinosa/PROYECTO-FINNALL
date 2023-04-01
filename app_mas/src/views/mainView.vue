<template>
  <plantillaPrincipal />
  </template>
  
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components

  import plantillaPrincipal from '@/components/plantillaPrincipal.vue';
  export default defineComponent({
    name: 'helpView',
  
    components: {
      plantillaPrincipal,
    },
  });
  </script>
  
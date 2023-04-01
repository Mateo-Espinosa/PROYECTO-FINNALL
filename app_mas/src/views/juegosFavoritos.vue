<template>
  <Favoritos />
  <footerMas/>
</template>
  
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components

  import Favoritos from '@/components/juegosFavoritosComponet.vue';
  import footerMas from '@/components/footerUnico.vue';
  export default defineComponent({
    name: 'contacView',
  
    components: {
      Favoritos,
      footerMas
    },
  });
  </script>
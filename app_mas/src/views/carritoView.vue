<template>
    <carritoComponent />
    <footerMas/>
    </template>
    
    
    
    <script>
    import { defineComponent } from 'vue';
    
    // Components
  
    import carritoComponent from '@/components/carritoComponent.vue';
    import footerMas from '@/components/footerUnico.vue';
    export default defineComponent({
      name: 'carritoV',
    
      components: {
      carritoComponent,
      footerMas
      },
    });
    </script>
    
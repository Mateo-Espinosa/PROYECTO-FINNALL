<template>
    <tiendaComponetnt />
    <footerMas/>
    </template>
    
    
    <script>
    import { defineComponent } from 'vue';
    
    // Components
  
    import tiendaComponetnt from '@/components/tiendaComponent.vue';
    import footerMas from '@/components/footerUnico.vue';
    export default defineComponent({
      name: 'tiendaViewss',
    
      components: {
        tiendaComponetnt,
        footerMas
      },
    });
    </script>
    
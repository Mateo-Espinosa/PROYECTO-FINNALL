<template>
    <cerrarView />
</template>
    
    
    <script>
    import { defineComponent } from 'vue';
    
    // Components
  
    
    import cerrarView from '@/components/cerrarSesion.vue';
    export default defineComponent({
      name: 'contacView',
    
      components: {
        cerrarView,
  
      },
    });
    </script>

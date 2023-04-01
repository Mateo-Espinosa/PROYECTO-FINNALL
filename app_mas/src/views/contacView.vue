<template>
    <contact />
    <footerMas />
</template>
    
    
    <script>
    import { defineComponent } from 'vue';
    
    // Components
  
    import contact from '@/components/contactoComponet.vue';
    import footerMas from '@/components/footerUnico.vue';
    export default defineComponent({
      name: 'contacView',
    
      components: {
        contact,
        footerMas
      },
    });
    </script>

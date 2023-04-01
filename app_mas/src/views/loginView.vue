<template>
   <loginComponent/>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components

  import loginComponent from '@/components/loginComponet.vue';
  export default defineComponent({
    name: 'loginView',
  
    components: {
        loginComponent,
    },
  });
  </script>
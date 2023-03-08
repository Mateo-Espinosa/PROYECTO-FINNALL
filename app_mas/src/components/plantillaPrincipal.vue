<template>
    <nav-bar>
      <template v-slot:drawer>
          <botonBase />
      </template>
      <template v-slot:main>
        <slot></slot>
      </template>
      <template v-slot:footer>
        <footerMas />
      </template>
    </nav-bar>
  </template>

<script>
import { defineComponent } from 'vue';

// Components
import navBar from '@/components/navBar.vue';
import botonBase from '@/components/botonBase.vue';
import footerMas from '@/components/footerMas.vue';

export default defineComponent({
  name: 'plantillaPrincipal',

  components: {
    navBar, 
    botonBase,
    footerMas,
  },
});
</script>
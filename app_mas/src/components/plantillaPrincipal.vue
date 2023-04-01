<template>
  <navBar />
 
<hptavida/>
  <footerMas />
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

// Components
import navBar from '@/components/barraNav.vue';
import footerMas from '@/components/footerUnico.vue';
import hptavida from '@/components/JuegosPrincipales.vue';


export default defineComponent({
  name: 'plantillaPrincipal',
  components: {
    navBar,
    footerMas,
    hptavida
  },
  mounted() {
  document.title = 'MAS-GAMING';
}
,
  data() {
    return {
      allowBack: true,
    };
  },
  created() {
    const router = useRouter();

    window.addEventListener('popstate', (event) => {
      const state = event.state || {};
      if (!state.allowBack) {
        router.replace('/principal'); 
      }
    });
    window.history.pushState({ allowBack: true }, '');
    this.allowBack = true;
  },
});
</script>

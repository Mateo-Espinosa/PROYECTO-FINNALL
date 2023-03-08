<template>
<plantillaPrincipal>
  <sliderBase />
</plantillaPrincipal>
</template>


<script>
import { defineComponent } from 'vue';

// Components
// import AyudaPlis from '@/components/helpPagin.vue';
import plantillaPrincipal from '@/components/plantillaPrincipal.vue';
import sliderBase from '@/components/sliderBase.vue';

export default defineComponent({
  name: 'helpView',

  components: {
    plantillaPrincipal,
    sliderBase
  },
});
</script>

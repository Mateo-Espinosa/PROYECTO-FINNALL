<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" class="bg-black">
        <v-list-item
        class="avatar"
        prepend-avatar="https://pbs.twimg.com/profile_images/1337826302284320768/wCDGzvO8_400x400.jpg"
        title="usuario"
      >
      <div class="subtitle">
        <p>{{correo}}</p>
      </div>
   
      </v-list-item>
        <v-btn
          class="boton-carrito"
          color="white"
          variant="plain"
          to="carrito"
        >
          Carrito
          <v-btn
            size="small"
            variant="text"
            icon="mdi-cart"
          ></v-btn>
        </v-btn>
        <v-btn
          class="boton-favorito"
          color="white"
          variant="plain"
          to="favoritos"
        >
          favoritos
          <v-btn
            size="small"
            variant="text"
            icon="mdi-heart"
          ></v-btn>
        </v-btn>
      </v-navigation-drawer>
      <v-app-bar class="bg-black align-left">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="contenedor-titulo">
          <v-headline class="titulo">MAS GAMING</v-headline>
        </div>
        <div class="contenedor-botones">
          <v-btn
            v-for="(item, index) in rutas"
            :key="index"
            @click="url(item.ruta)"
            class="botones"
            variant="plain"
          >
            <span>{{ item.nombre }}</span>
          </v-btn>
        </div>
        <div>
          <cerrarSesion />
        </div>
      </v-app-bar>
      <v-main class="hero">
        <v-carousel
          class="slider"
          cycle
          show-arrows="hover"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
        <slot name="card"></slot>
        <slot name="footer"></slot>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import cerrarSesion from "@/components/cerrarSesion.vue"

export default {
  name: 'nav_bar',
  computed: {
    correo() {       //Metodo para llamar el correo almacenado en vuex
      return this.$store.state.correo;
    },
  },
  data: () => ({ 
    drawer:false,    //Icono hamburguesa, para abrir el menu
    rutas: [
      {nombre : "Tienda", ruta : '/tienda'},
      {nombre : "Contacto", ruta : '/contacto'},
    ],
    items: [        //Imagenes del slinder
      {
        src: 'https://www.irrompibles.net/irrwp/wp-content/uploads/2020/11/Marvels-Spiderman-Miles-Morales--1536x864.jpg',
      },
      {
        src: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg',
      },
      
      {
        src: 'https://www.callofduty.com/content/dam/atvi/infinityward/iw-touchui/news/feature/2022/11/WZ2-S01-DMZ-TACTICS-TOUT.jpg',
      },
          
      {
        src: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
      },
          
      {
        src: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Fortnite_Chapter4_Season2.jpg',
      }
    ],
  }),
  //Componentes
  components: {
    cerrarSesion,    
  },

  methods: {
    //Metodo de ruta para los botones
    url(ruta){
      this.$router.push(ruta)
    },
  }
}
</script>
<style scoped>
.titulo {
  color: white;
  font-family: Mokoto;
  text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 10px #df29ff;
  cursor: pointer;
  font-size: 21px;
}
.titulo:hover {
  text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 80px #D500F9;
}
.contenedor-titulo {
  margin-left: 3%;
}
.contenedor-botones {
  margin-left: 22%;
}
.botones{
  background-color: transparent;
}
.botones:hover {
  background-color: #D500F9;
  transition-delay: .1s;
  box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
  }
.hero {
  background-color: black;
  background: url('../assets/inicio.gif');
  background-size: cover;
  height: 100vh;
}

.slider {
  width: 850px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 .slider:hover {
  box-shadow: 0 0 10px #d400f907, 0 0 20px #d400f934, 0 0 80px #d400f92f;
}
 .avatar{
  margin-top: 18px;
}

 .boton-carrito {
   margin-top: 20%;
   margin-bottom: 7%;
   width: 87%;
   margin-left: 5%;
   background-color: transparent;
    }
 .boton-favorito {
    width: 87%;
    margin-left: 5%;
    background-color: transparent;
    }
  .boton-favorito:hover,
  .boton-carrito:hover {
    background-color: #D500F9;
    transition-delay: .1s;
    box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
    }
  .titles {
    margin-top: -11%;
    margin-left: 13%;
    }
  .titles p {
   color: white;
   font-size: 15px;
  }
  .subtitle {
    font-size: 12px;
  }
  
 
</style>
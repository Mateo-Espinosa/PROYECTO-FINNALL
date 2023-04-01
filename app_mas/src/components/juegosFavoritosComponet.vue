<template>
    <div>
    <v-app>

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
          <v-btn class="boton-carrito" 
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
      
        <v-btn class="boton-favorito" 
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
            <v-btn v-for="(item,index) in rutas" :key="index"
            @click="url(item.ruta)"
            class="botones"
            variant="plain"
            >
            <span>{{ item.nombre }}</span>
          </v-btn>
        </div>
      <div>
        <cerrarSesion/>
      </div>
      
        
          </v-app-bar>

          <v-main class="fondo-pagin" style="height: 100%;">

            <div>
              <v-headline class="titulo-favoritos">Mis juegos Favoritos</v-headline>
            </div>
        <v-row>
          <v-col
          v-for="(juego, index) 
          in favoritos" :key="index" 
          cols="12" md="4"
          class="card-column" 
          >
        
            <v-card
              class="mx-auto cart-fav"
              max-width="400"

            >
              <v-img
                :src="juego.src"
                height="200"
                contain
                style="height: 100%;"
              />
              <p class="title-jue">{{ juego.title }}</p>
              <v-card-actions>
                <v-spacer />
                <v-btn
                class="boton-cerrar"
                variant="tonal"
                color="white"
                title="Eliminar juego de favoritos"
                @click="eliminarFavorito(juego)"
              >
                Eliminar
            </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
  </template>
  
  <script>
  import cerrarSesion from "@/components/cerrarSesion.vue"

export default {
  data() {
    return {
      favoritos: [],
      drawer:false, 
      rutas: [
        {nombre : "Inicio", ruta : '/principal'},
        {nombre : "Tienda", ruta : '/tienda'},
        {nombre : "Contacto", ruta : '/contacto'},
      ],
    }
    
  },
  mounted() {
  document.title = 'JUEGOS FAVORITOS';
},
components: {
  cerrarSesion
},

  methods: {
    //botones
    url(ruta){
        this.$router.push(ruta)
      },
    eliminarFavorito(juego) {
      const index = this.favoritos.findIndex((fav) => fav.title === juego.title);
      if (index !== -1) {
        this.favoritos.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      }
    }
  },
    //Llamar el correo guardado
  computed: {
    correo() {
      return this.$store.state.correo;
    },
  
  },
  created() {
    //para tener los juegos seleccioandos como favoritos
    const favoritos = this.$route.query.favoritos
    if (favoritos) {
      this.favoritos = JSON.parse(favoritos)
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    }
  },
}
</script>
  
  <style scoped>
  @font-face {
    font-family: 'Mokoto';
    src: url('../assets/FONTS/masd.otf') format('woff');
  }
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

.titulo-favoritos {
  color: white;
  margin-left: 32%;
  margin-top: 1%;
  margin-bottom: 3%;
  font-family: Mokoto;
  text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 80px #D500F9;
  font-size: 30px;
  display: inline-block;
  cursor: pointer;
}

.titulo-favoritos:hover {

  text-shadow: 0 0 10px #ffffff, 0 0 40px #ffffff, 0 0 10px #df29ff;
}

.contenedor-titulo {
  margin-left: 3%;
}
.contenedor-botones {
  margin-left: 18%;
}
.botones{
background-color: transparent;

}
.botones:hover {
  background-color: #D500F9;
  transition-delay: .1s;
  box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
  }
.fondo-pagin {
  background-color: black;
  background: url('../assets/5.gif');
  background-size: cover;
  height: 100vh;
}
.fixed-height-container {
    height: calc(100vh - 128px); /* 128px es la altura aproximada de la barra de navegación y el encabezado */
    overflow-y: auto;
}
.avatar{
  margin-top: 20px;
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
        .col-sm-6 {
            width: 50%;
          }

          .cart-fav {
            background-color: rgba(0, 0, 0, 0.575);
          }
          .cart-fav:hover {
            box-shadow: 0 0 10px #d400f907, 0 0 20px #d400f92c, 0 0 80px #d400f927;
          }
          
  .boton-cerrar {
    background-color: transparent;
    font-size: 12px;
  }

  .boton-cerrar:hover {
    background-color: #D500F9;
    transition-delay: .1s;
    box-shadow: 0 0 10px #D500F9, 0 0 40px #D500F9, 0 0 80px #D500F9;
 } 
 .title-jue {
  font-size: 12px;
  color: white;
  font-family: Mokoto;
  margin-left: 4%;
  margin-top: 4%;
 }
 .subtitle {
  font-size: 12px;
}

  </style>


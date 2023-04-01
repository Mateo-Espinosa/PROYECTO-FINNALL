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
    <v-main class="hero">
      
          <v-layout style="height: 128px;" class="contacto">
            <div class="mx-auto my-4">
              <v-btn
              class="botonc"
                variant="tonal"
                @click="active = !active"
              >
                Contáctanos
              </v-btn>
            </div>
        
            <v-bottom-navigation
              class="desplegable"
              :active="active"
              color="indigo"
            >
              <v-btn>
                <v-icon>mdi-whatsapp</v-icon>
                <a v-bind:href="'https://web.whatsapp.com'" :target="'blank'">WhatsApp</a>
              </v-btn>
              <v-btn>
                  <v-icon>mdi-facebook</v-icon>
          
                  <a v-bind:href="'https://es-la.facebook.com'" :target="'blank'">Facebook</a>
                </v-btn>
              <v-btn>
                <v-icon>mdi-twitter</v-icon>
        
                <a v-bind:href="'https://twitter.com/?lang=es'" :target="'blank'">Twitter</a>
              </v-btn>
        
              <v-btn>
                <v-icon>mdi-instagram</v-icon>

                <a v-bind:href="'https://www.instagram.com'" :target="'blank'">Instagram</a>
              </v-btn>
              <v-btn>
                  <v-icon>mdi-discord</v-icon>
                  <a v-bind:href="'https://discord.com'" :target="'blank'">Discord</a>
                </v-btn>
  
            </v-bottom-navigation>
        
          </v-layout>
            <v-card
            max-width="400"
            class="info mx-auto"
          >
  
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card
                    color="#385F73"
                    theme="dark"
                  >
                    <v-card-title class="text-h5">
                      Accede a los juegos al instante
                    </v-card-title>
        
                    <p class="oferta">
                      Disfruta de ofertas exclusivas, actualizaciones automáticas y otras grandes ventajas.</p>
                  </v-card>
               
                </v-col>
        
                <v-col cols="12">
                  <v-card
                    color="#1F7087"
                    theme="dark"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="text-h5">
                          Para ti
                        </v-card-title>
        
                        <p class="oferta">Trabajamos continuamente para traer nuevas actualizaciones.</p>
                      </div>
        
                      <v-avatar
                        class="ma-3"
                        size="100"
                        rounded="0"
                      >
                        <v-img src="https://www.cinconoticias.com/wp-content/uploads/Generos-de-videojuegos.jpg"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
        
                <v-col cols="12">
                  <v-card
                    color="#952175"
                    theme="dark"
                  >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="text-h5">
                          Acceso anticipado a juegos
                        </v-card-title>
        
                        <p class="oferta">Descubre, juega e involúcrate con juegos mientras progresan.</p>
                      </div>
                    </div>
                    <div>
                      
                    </div>
                    
                  </v-card>
                  <v-dialog v-model="dialog" persistent width="2048">
                    <template v-slot:activator="{ props }">
                      <v-btn class="email" hover v-bind="props">Envíanos un email</v-btn>
                    </template>
                    <v-card
                    class="mx-auto"
                    elevation="1"
                    max-width="500"
                  >
                    <v-card-title class="py-5 font-weight-black">Ponte en contacto con nosotros</v-card-title>
                
                    <v-card-text>
                      Cuéntanos en qué podemos ayudarte y te responderemos en el menor tiempo posible.
                    </v-card-text>
                
                    <v-card-text>
                        <v-col cols="15" sm="26" md="26">
                          <v-text-field label="Correo electrónico" required type="email" autocomplete="username" v-model="correo"></v-text-field>
                        </v-col>
                        <div class="text-subtitle-2 font-weight-black mb-1">Digite aquí su petición</div>
                      <v-text-field
                        single-line
                        variant="outlined"
                      ></v-text-field>        
                      <v-btn
                        :disabled="loading"
                        :loading="loading"
                        block
                        class="bg-purple-accent-4 text-none mb-4"
                        color=""
                        size="x-large"
                        variant="flat"
                        @click="enviar"
                      >
                        Enviar
                      </v-btn>
                
                      <v-btn
                        block
                        class="text-none"
                        color="grey-lighten-3"
                        size="x-large"
                        variant="flat"
                        @click="cerrar"
                      >
                        Cancelar
                      </v-btn>
                    </v-card-text>
                  </v-card>
                  </v-dialog> 
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-carousel class="slider" cycle show-arrows="hover" hide-delimiters height="250">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              cover
            ></v-carousel-item>
          </v-carousel>

          <v-carousel class="slider2" cycle show-arrows="hover" hide-delimiters height="250">
            <v-carousel-item
              v-for="(ite,i) in item"
              :key="i"
              :src="ite.src"
              cover
            ></v-carousel-item>
          </v-carousel>

    </v-main>
  </v-app>
</div>
</template>

<script>
import cerrarSesion from "@/components/cerrarSesion.vue"
  export default {
      name: 'nav_bar',
      computed: {
    correo() {
      return this.$store.state.correo;
    },
  },
  mounted() {
  document.title = 'CONTACTO';
},
  components: {
    cerrarSesion
  },
    data: () => ({ 
      drawer:false, 
      active: false,
      reveal: false,
    rutas: [
      {nombre : "Inicio", ruta : '/principal'},
      {nombre : "Tienda", ruta : '/tienda'},
    ],
    dialog: false,
    items: [
          {
            src: 'https://img.unocero.com/2021/11/Videojuegos-fuentes-de-informacion-gamers-.jpg',
          },
          {
            src: 'https://img.unocero.com/2021/11/Videojuegos-compras-online-.jpg',
          },
          {
            src: 'https://videojuegos.roams.es/images/post/es_ES_videogames/juegos.jpg',
          },
          {
            src: 'https://videojuegos.roams.es/images/post/es_ES_videogames/rankings-mejores-videojuegos-ps5.jpg',
          },
        ],
        item: [
          {
            src: 'https://indiehoy.com/wp-content/uploads/2020/09/high-score.jpg',
          },
          {
            src: 'https://www.egames.news/__export/1610896100511/sites/debate/img/2021/01/17/123123_1_crop1610896068543.jpg_1269359182.jpg',
          },
          {
            src: 'https://wallpaperaccess.com/full/4334829.jpg',
          },
          {
            src: 'https://cdn.wallpapersafari.com/72/64/cJVyoq.jpg',
          },
        ],
        
   }),

  methods: {
    url(ruta){
      this.$router.push(ruta)
    },
cerrar() {
  if (confirm('¿Está seguro de que desea cancelar el correo?')) {
    this.dialog = false;
  }
},
enviar() {
  if (confirm('Tu correo fue enviado con éxito')) {
    this.dialog = false;
  }
}
  }
  }
</script>

<style scoped>

.hero {
  background-color: black;
  background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/denus5p-8441bdcb-c4f5-49d6-ad16-c0f648355855.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGVudXM1cC04NDQxYmRjYi1jNGY1LTQ5ZDYtYWQxNi1jMGY2NDgzNTU4NTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sn9Wutf1iSk_ZUCPYL_cAMN5x0v9b304_Ny4tiDm6O4');
  background-size: cover;
  height: 100vh;
}
  .slider{
    width: 400px;
    position: absolute;
    left: 2%;
  }
  .slider2{
    width: 400px;
    position: absolute;
    right: 2%;
  }
.avatar{
  margin-top: 20px;

}
.contacto{
  position: absolute;
  top: 90%;
  left: 60%;
  transform: translate(-60%, -60%);
}
.email{
  height: 40px;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.644);
  color: white;
  margin-top: 10px;
}
.email:hover{
  background-color: white;
  color: black;

}
.botonc{
  height: 40px;
  width: 400px;
  background-color: black;
  color: white;
}
.desplegable{
  background-color: rgba(0, 0, 0, 0.644);
  color: white;
  width: 400px;
}
.botonc:hover{
  background-color: #AA00FF;
  color: white;
}
.info{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
}
.oferta{
padding-left: 14px;
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
      a{
        text-decoration: none;
        text-decoration-style: none;
        color: white;
      }
      .subtitle {
        font-size: 12px;
      }
      
</style>
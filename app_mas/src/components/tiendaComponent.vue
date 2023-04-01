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
        <v-carousel class="slider" cycle show-arrows="hover" hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>

        <!-- cartas con redireccion -->
        <div class="cartas">
          <v-card class="CartaN"
          >
          <v-slot:title class="Titulo-cards">
            Juegos de Aventura
          </v-slot:title>
          <v-card-text class="vinculo">
            <a>¿Estás listo para cazar muchos misterios?</a>
          </v-card-text>
          
        </v-card>
          <v-card class="CartaN"
          >
          <v-slot:title class="Titulo-cards">
            Juegos de accion
          </v-slot:title>
          <v-card-text class="vinculo">
             <a>Solo para jugadores rudos, ¿Tu Lo eres?</a>
          </v-card-text>
        </v-card>
          <v-card class="CartaN"
          >
          <v-slot:title class="Titulo-cards">
            Juegos de terror
          </v-slot:title>
          <v-card-text class="vinculo">
            <a>Creo que no tienes las agallas, ¿O si?</a>
          </v-card-text>
        </v-card>
          <v-card class="CartaN"
          >
        <v-slot:title class="Titulo-cards">
          Juegos de puzzle
        </v-slot:title>
          <v-card-text class="vinculo">
            <a>¡demuestra tu astucia!</a>
          </v-card-text>
        </v-card>
       </div>

  <!-- Primer grupo de cartas de los videojuegos -->
<div>
 <h2   id="juegos-aventura" class="Titulo-genero">Juegos de aventura</h2>
</div>
    <v-container  class=" d-flex card-container">
    <v-card class="cart-fav bg-black flex-grow-1 mr-2"
    >
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :col="card.Price"
            :cols="card.flex" 
          >
            <v-card class="bg-black flex-grow-1 mr-2">
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
                <v-card-title class="text-white" v-text="card.Price"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                class="favoritos"
                size="small"
                variant="text"
                icon="mdi-cart"
                :color="card.color" 
                :class="{ 'activo': card.favorito }"
                @click="marcarFavorito(card)"
              ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card> 

    <v-card class="bg-black flex-grow-1 mr-2">
        <v-row dense>
          <v-col
            v-for="card in cards2"
            :key="card.title"
            :col="card.Price"
            :cols="card.flex"
          >
            <v-card class="bg-black flex-grow-1 mr-2">
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
                <v-card-title class="text-white" v-text="card.Price"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                class="favoritos"
                size="small"
                variant="text"
                icon="mdi-cart"
                :color="card.color" 
                :class="{ 'activo': card.favorito }"
                @click="marcarFavorito(card)"
              ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      </v-container>


  <!-- Segundo grupo de cartas de los videojuegos -->
  <div>
    <h2 id="Accion" class="Titulo-genero">Juegos de Accion</h2>
   </div>
       <v-container class=" d-flex card-container">
       <v-card class="bg-black flex-grow-1 mr-2"
  
         
       >
           <v-row dense>
             <v-col
               v-for="card in cards3"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex" 
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white" v-text="card.title"></v-card-title>
                   <v-card-title class="text-white" v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card> 
   

       <v-card class="bg-black flex-grow-1 mr-2">
           <v-row dense>
             <v-col
               v-for="card in cards4"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex"
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white" v-text="card.title"></v-card-title>
                   <v-card-title class="text-white" v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card>
         </v-container>
    
  <!-- Tercer grupo de cartas de los videojuegos -->
  <div>
    <h2 id="terror" class="Titulo-genero">Juegos de Terror</h2>
   </div>
       <v-container class=" d-flex card-container">
       <v-card class="bg-black flex-grow-1 mr-2"
       >
           <v-row dense>
             <v-col
               v-for="card in cards5"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex" 
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white" v-text="card.title"></v-card-title>
                   <v-card-title class="text-white" v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card> 

       <v-card class="bg-black flex-grow-1 mr-2">
           <v-row dense>
             <v-col
               v-for="card in cards6"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex"
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white" v-text="card.title"></v-card-title>
                   <v-card-title class="text-white" v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card>
         </v-container>

  <!-- Cuarta grupo de cartas de los videojuegos -->
  <div>
    <h2 id="puzzle" class="Titulo-genero">Juegos de puzzle</h2>
   </div>
       <v-container class=" d-flex card-container cointaner-ultimo">
       <v-card class="bg-black flex-grow-1 mr-2"
       >
           <v-row dense>
             <v-col
               v-for="card in cards7"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex" 
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white" v-text="card.title"></v-card-title>
                   <v-card-title class="text-white" v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card> 

       <v-card class="bg-black flex-grow-1 mr-2">
           <v-row dense>
             <v-col
               v-for="card in cards8"
               :key="card.title"
               :col="card.Price"
               :cols="card.flex"
             >
               <v-card class="bg-black flex-grow-1 mr-2">
                 <v-img
                   :src="card.src"
                   class="align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="200px"
                   cover
                 >
                   <v-card-title class="text-white"  v-text="card.title"></v-card-title>
                   <v-card-title class="text-white"  v-text="card.Price"></v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   class="favoritos"
                   size="small"
                   variant="text"
                   icon="mdi-cart"
                   :color="card.color" 
                   :class="{ 'activo': card.favorito }"
                   @click="marcarFavorito(card)"
                 ></v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
         </v-card>
         </v-container>
    
      </v-main>
    </v-app>
  </div>
  <slot name="footer"></slot>
  </template>
  
  
  <script>
    import cerrarSesion from "@/components/cerrarSesion.vue"
      export default {
          name: 'nav_bar',
         
        data: () => ({ 
          drawer:false, 
        rutas: [
          {nombre : "Inicio", ruta : '/principal'},
          {nombre : "Contacto", ruta : '/contacto'},

        ],
        dialog: false,
        items: [
              {
                src: 'https://images2.alphacoders.com/519/519170.jpg',
              },
              {
                src: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_TheWitcher3WildHunt_enGB_image1600w.jpg',
              },
              {
                src: 'https://images6.alphacoders.com/438/438835.jpg',
              },
              {
                src: 'https://media.vandal.net/m/11-2020/2020111612215638_1.jpg',
              },
              {
                src: 'https://images.alphacoders.com/248/248621.jpg',
              },
            ],
            //Cartas de los juegos de aventura 
            cards: [
          { title: 'Elden ring', Price:'159.900 COP', src: 'https://images4.alphacoders.com/115/1151249.jpg', flex: 12,  favorito: false, color: 'white'  },
          { title: 'Zelda: Breath of the wild', Price:'229.999 COP', src: 'https://images7.alphacoders.com/803/803346.png', flex: 6,  favorito: false, color: 'white' },
          { title: 'God Of War Ragnarok', Price:'247,433 COP', src: 'https://images3.alphacoders.com/127/1273405.jpg', flex: 6,  favorito: false, color: 'white' },
          ],
          cards2: [
            { title: 'Uncharted', Price:' 69.000 COP', src: 'https://media.tycsports.com/files/2021/05/10/280125/uncharted-4_862x485_wmk.jpg', flex: 12,  favorito: false, color: 'white' },
            { title: 'Minecraft', Price:'179.900 COP', src: 'https://images.alphacoders.com/246/246223.jpg', flex: 6 ,  favorito: false, color: 'white'},
            { title: 'Beyond Two Souls',Price:'179.000 COP',  src: 'https://www.gamespace.com/wp-content/uploads/2019/07/Beyond-Two-Souls-Banner-1280x720.jpg', flex: 6,  favorito: false, color: 'white' },
          ], 
          // Cartas de los juegos de acción
          cards3: [
            { title: 'Gear Of War 5', Price:'119.990 COP', src: 'https://images6.alphacoders.com/102/1020935.jpg', flex: 12,  favorito: false, color: 'white' },
            { title: 'red dead redemption 2',Price:'213.900 COP',  src: 'https://images5.alphacoders.com/917/917971.jpg', flex: 6,  favorito: false, color: 'white' },
            { title: 'Spiderman', Price:'154.900  COP', src: 'https://images6.alphacoders.com/913/913243.jpg', flex: 6,  favorito: false, color: 'white' },
          ],
          cards4: [
            { title: 'final fantasy 3', Price:'30.900 COP',  src: 'https://images6.alphacoders.com/105/1053313.jpg', flex: 12,  favorito: false, color: 'white' },
            { title: 'halo 5 guardians', Price:'199.000 COP', src: 'https://images3.alphacoders.com/593/593826.jpg', flex: 6,  favorito: false, color: 'white' },
            { title: 'pay day', Price:'89.990 COP', src: 'https://store-images.s-microsoft.com/image/apps.47078.66522664362123860.2a5c211e-2b25-45c5-81e7-baf088b510fe.4f021cd8-0389-4d71-9a87-c44d6c10f7bc?q=90&w=480&h=270', flex: 6,  favorito: false, color: 'white' },
          ],
          // Cartas de los juegos de Terror
          cards5: [
          { title: 'resident evil 4 ', Price:'260,826 COP', src: 'https://images4.alphacoders.com/124/1244847.jpg',  flex: 12 ,  favorito: false, color: 'white' },
          { title: 'outlast ll', Price:'49.999  COP', src: 'https://images6.alphacoders.com/715/715930.jpg', flex: 6 ,  favorito: false, color: 'white'},
          { title: 'the evil within', Price:'129.900 COP',  src: 'https://images.alphacoders.com/519/519644.jpg', flex: 6,  favorito: false, color: 'white' },
          ],
          cards6: [
            { title: 'dead space', Price:'149.900 COP', src: 'https://images3.alphacoders.com/127/1277778.jpg', flex: 12,  favorito: false, color: 'white' },
            { title: 'Soma', Price:'66.000 COP', src: 'https://cdn1.epicgames.com/undefined/offer/SOMA_promo-2560x1440-e92be1297f6234f9171ae88de27b92f0.jpg', flex: 6,  favorito: false, color: 'white' },
            { title: 'Visage', Price:'51.400 COP', src: 'https://images.alphacoders.com/118/1181173.jpg', flex: 6,  favorito: false, color: 'white' },
          ],
          // Cartas de los juegos de Puzles
          cards7: [
            { title: 'Unravel', Price:'69.900 COP', src: 'https://images2.alphacoders.com/614/614731.jpg', flex: 12,  favorito: false, color: 'white' },
            { title: 'portal 2', Price:'41,942.52 COP',src: 'https://images2.alphacoders.com/223/223172.jpg', flex: 6,  favorito: false, color: 'white' },
            { title: 'Oddworld: Soulstorm', Price:'28.000. COP', src: 'https://images3.alphacoders.com/114/1141953.jpg', flex: 6,  favorito: false, color: 'white' },
          ],
          cards8: [
            { title: 'The Last Guardian', Price:'19.200', src: 'https://images.alphacoders.com/899/899708.jpg', flex: 12 },
            { title: 'Fez', Price:'23.500.23 COP', src: 'https://images6.alphacoders.com/517/517226.jpg', flex: 6 },
            { title: 'World of Goo', Price:'25.000 COP', src: 'https://images8.alphacoders.com/671/671829.jpg', flex: 6 },
          ],
          favoritos: [],
       }),
       mounted() {
  document.title = 'TIENDA-GAMING';  //Nombre de la pagina
},
       components: {
              cerrarSesion
       },
        methods: {
  url(ruta){
          this.$router.push(ruta)
        },
marcarFavorito(card) {
  card.favorito = !card.favorito;

  if (!card.favorito) {
    const index = this.favoritos.findIndex((fav) => fav.title === card.title);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      card.color = "white";
    }
  } else {
    this.favoritos.push(card);
    card.color = "red";
  }
  localStorage.setItem('carrito', JSON.stringify(this.favoritos));
},

agregarFavorito(card) {
  if (!this.favoritos.some((fav) => fav.title === card.title)) {
    this.favoritos.push(card);
    localStorage.setItem('carrito', JSON.stringify(this.favoritos));
  }
},


obtenerFavoritos() {
  return JSON.parse(localStorage.getItem('carrito') || '[]');
}
},
computed: {
    correo() {
      return this.$store.state.correo;
    },
  
  },
created() {
this.favoritos = this.obtenerFavoritos();
this.cards.forEach(card => {
  card.favorito = this.favoritos.some(fav => fav.title === card.title);
  card.color = card.favorito ? 'red' : 'white';
});
},
      }
      
    </script>
  
  <style scoped>
    .text {
      font-weight: 300;
      letter-spacing: .1cm;
    }
    .hero {
      background-color: black;
      background: url('../assets/inicio.gif');
      background-size: cover;
      height: 100%;
    }
    
    .slider {
      width: 70%;
      position: absolute;
      top: 11.5%;
      left: 40%;
      transform: translate(-50%, -50%);
      margin-top: -4%;
    }
    .carrito{
      margin-left: 10px;
      margin-top: 20px;
    }
    .avatar{
      margin-top: 20px;
    }

    .cartas{
      max-width:250px;
      margin-left: 78%;
      margin-top: 8%;
    }

    .CartaN
    {
      background: rgba(0, 0, 0, 0.274);
      background-size: cover;
      color: white;
      margin: 5%;
    }
 
    .vinculo a{
      color:rgb(6, 87, 238);
      text-decoration: none;
    }
    .vinculo a:hover{
      color:#ff00ff;
      text-shadow: 0 0 8px #ff00ff, 0 0 20px #ff00ff;
    }
  .segunda_carta{
      margin-top:5%;
      align-items:baseline;
      background-color: black;
    }

    
    
    .SecondCard{    
      margin-left:51%;
      margin-top:-32.8%
    }
    .H1_JA{
      margin-top: 8%;
      text-align: center;
      background-color: black;
      height: 60px;
    }
    .cart-fav {
      border-radius: 1%;
    }
    .Titulo-cards {
      color: white;
     
      text-shadow: 0 0 8px #ffffffb7, 0 0 20px #ffffff9c;
      font-size: 16px;
        margin-left: 6%;
     
      }
      .Titulo-genero {
        color: white;
           font-family: Mokoto;
        text-shadow: 0 0 8px #ffffffb7, 0 0 20px #ffffff;
        font-size: 40px;
        margin-top: 8%;
        text-align: center;
        }
      .card-container {
        max-width: 1600px;
        margin-top: 5%;
        background-color: black;
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
        height: calc(100vh - 128px); 
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
      .cart-fav {
      background-color: rgba(0, 0, 0, 0.575);
      }
      .favoritos{
        position: absolute;
        left: 45%;
      }
      .subtitle {
        font-size: 12px;
      }
    </style>
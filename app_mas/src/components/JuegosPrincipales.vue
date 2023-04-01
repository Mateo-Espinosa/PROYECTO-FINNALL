<template>
  <v-card
    class="card mx-auto bg-black"
    max-width="100%"
    cols="4"
  >
    <v-container fluid class="bg-black">
      <div class="juegos text-h6">JUEGOS MÁS VENDIDOS DEL MES</div>
      <v-row dense class="bg-black">
        <v-col
          v-for="card in cards"
          :key="card.title.precio"
          :cols="card.flex"
          class="tarjeta bg-black"
        >
          <v-card class="bg-black">
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
              class="favoritos"
              size="small"
              variant="text"
              icon="mdi-heart"
              :color="card.color" 
              :class="{ 'activo': card.favorito }"
              @click="marcarFavorito(card)"
            ></v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-divider :thickness="17" color="purple-accent-4"></v-divider>
    </v-container>
    <div class="juegos text-h6">NOVEDADES DEL 2023</div>
  </v-card>
  <v-carousel class="slider" cycle show-arrows="hover" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <slot name="card"></slot>
    <slot name="footer"></slot>

    <v-card class="card mx-auto bg-black" max-width="100%" cols="4">
    
      <v-container fluid class="bg-black">
        <div class="juegos text-h6">FRANQUICIAS MÁS IMPORTANTES</div>
        <v-row dense class="bg-black">
          <v-col v-for="card in cardst" :key="card.title" :cols="card.flex" class="bg-black">
            <v-card class="bg-black">
              <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn
                  class="favoritos"
                  size="small"
                  variant="text"
                  icon="mdi-heart"
                  :color="card.color" 
                  :class="{ 'activo': card.favorito }"
                  @click="marcarFavorito(card)"
                ></v-btn>
  
               
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-divider :thickness="17" color="purple-accent-3"></v-divider>
      </v-container>
    </v-card>
</template>

<script>
export default {
data: () => ({
  cards: [
      { title: 'Grand Theft Auto V', src: 'https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg', flex: 20, favorito: false, color: 'white' },
      { title: 'God of War ragnarok', src: 'https://images.alphacoders.com/117/1173124.jpg', flex: 3, favorito: false, color: 'white' },
      { title: 'Tom Clancys Rainbow Six', src: 'https://cdn-ext.fanatical.com/production/product/1280x720/f203315f-dd14-4492-8cd1-d422016820e8.jpeg', flex: 6, favorito: false, color: 'white' },
      { title: 'Titanfall 2', src: 'https://images.alphacoders.com/842/842592.jpg', flex:6, favorito: false, color: "white"},
      { title: 'Watch Dogs 2', src: 'https://images7.alphacoders.com/386/386016.png', flex: 3, favorito: false, color: 'white' },
      { title: 'Resident Evil 2 Remake', src: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0608/9cJzlUE7sOpwvrCmOzxubniq.jpg', flex: 3, favorito: false, color: 'white' },
      { title: ' Elden Ring', src: 'https://images4.alphacoders.com/115/1151249.jpg', flex: 20, favorito: false, color: 'white' },
      { title: 'Modern Warfare 2', src: 'https://images7.alphacoders.com/532/532214.jpg', flex: 3, favorito: false, color: 'white' },
      { title: 'ForsPoken', src: 'https://images6.alphacoders.com/121/1219079.jpg', flex: 6, favorito: false, color: 'white' }
   
    ],
    cardst: [
      { title: 'Call of Duty', src: 'https://images3.alphacoders.com/827/827902.jpg', flex: 20, favorito: false, color: 'white' },
      { title: 'Mario Kart', src: 'https://images.alphacoders.com/879/879839.png', flex: 6, favorito: false, color: 'white' },
      { title: 'FIFA', src: 'https://images4.alphacoders.com/125/1257791.jpg', flex: 6, favorito: false, color: 'white' },
      { title: 'Need for Speed', src: 'https://images5.alphacoders.com/412/412703.jpg', flex: 20, favorito: false, color: 'white' },
      { title: 'Final Fantasy', src: 'https://media.vandal.net/m/2-2023/202322718265891_1.jpg', flex: 6, favorito: false, color: 'white' },
      { title: 'Halo', src: 'https://images2.alphacoders.com/602/thumb-1920-602223.jpg', flex: 6, favorito: false, color: 'white' },
      { title: 'The Sims', src: 'https://www.somosxbox.com/wp-content/uploads/2020/06/rsz_los-sims-4-vida-ecologica-portada.jpg', flex: 6, favorito: false, color: 'white' },
      { title: 'Assassin s Creed', src: 'https://images4.alphacoders.com/595/595710.jpg', flex: 6, favorito: false, color: 'white' },
  
    ],
    items: [
          {
            src: 'https://assets.xboxservices.com/assets/e5/4d/e54d4a36-75a4-481d-936d-47956fc448b9.jpg?n=Hogwarts-Legacy_GLP-Page-Hero-1084_1920x1080.jpg',
          },
          {
            src: 'https://images4.alphacoders.com/115/1158428.png',
          },
          {
            src: 'https://images2.alphacoders.com/130/1300313.jpg',
          },
          {
            src: 'https://images6.alphacoders.com/130/1302446.jpg',
          },
          {
            src: 'https://images4.alphacoders.com/124/1244847.jpg',
          },
        ],
  favoritos: [],
}),
methods: {
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
  localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
},

agregarFavorito(card) {
  if (!this.favoritos.some((fav) => fav.title === card.title)) {
    this.favoritos.push(card);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
},


obtenerFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}
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
.card{
  border-radius: 0%;
}
.favoritos{
  position: absolute;
  left: 45%;
}

.juegos {
color: white;
font-family: Mokoto;
text-shadow: 0 0 8px #ffffffb7, 0 0 20px #ffffff;
cursor: pointer;
font-size: 16px;
text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tarjeta{
letter-spacing: 19px;
}
</style>
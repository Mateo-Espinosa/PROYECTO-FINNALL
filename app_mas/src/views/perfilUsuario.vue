<template>
    <v-card class="bg-black">
      <v-layout>
        <v-navigation-drawer 
        class="bg-black"
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/1.jpg"
              title="Nombre de usuario"
              subtitle="correoelectrino@..."
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="" title="Biblioteca" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="" title="Shared with" value="shared"></v-list-item>
            <v-list-item prepend-icon="" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 648px"></v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
    export default {
      //
    }
  </script>
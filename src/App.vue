<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text href="https://www.seguimos.cl" target="_blank" class="grey--text">
        🌳 Seguimos
      </v-btn>
    </v-app-bar>
    <v-main>
      <Conteo/>
    </v-main>
    <v-footer fixed>
      <a style="text-decoration: none" href="https://github.com/seguimos/conteo/" target="_blank" class="black--text">🌳 Github</a>
    </v-footer>
  </v-app>
</template>

<script>
import Conteo from './components/Conteo';

export default {
  name: 'App',

  components: {
    Conteo,
  },

  data: () => ({
    //
  }),
};
</script>

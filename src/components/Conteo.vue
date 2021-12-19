<template>
  <v-container>
    <v-dialog v-model="dialogLimpiar">
      <v-card>
        <v-card-title>
          Limpiar
        </v-card-title>
        <v-card-subtitle>
          ¿Está seguro/a de limpiar los datos?
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-btn block color="grey darken-2" dark  @click="dialogLimpiar = false">
                No
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn block color="warning" @click="reset">
                Sí
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-col cols="12" md="8" class="px-0">
        <v-card elevation="0">
          <v-card-title>
            Conteo
          </v-card-title>
          <v-card-subtitle>
            Aplicación para conteo de votos de la segunda vuelta presidencial en Chile (2021). Estos datos no son almacenados y la aplicación solo es una herramienta de ayuda al conteo.
          </v-card-subtitle>
          <v-card-text>
            <v-simple-table v-show="lado==='diestro'">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td class="px-0">Boric</td>
                    <td>{{ votosBoric }}</td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'boric')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'boric')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-0">Kast</td>
                    <td>{{ votosKast }}</td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'kast')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'kast')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-0">Nulo</td>
                    <td>{{ votosNulo }}</td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'nulo')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'nulo')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-0">Blanco</td>
                    <td>{{ votosBlanco }}</td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'blanco')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'blanco')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-simple-table v-show="lado==='zurdo'">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'boric')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'boric')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="px-0">Boric</td>
                    <td>{{ votosBoric }}</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'kast')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'kast')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="px-0">Kast</td>
                    <td>{{ votosKast }}</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'nulo')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'nulo')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="px-0">Nulo</td>
                    <td>{{ votosNulo }}</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <v-btn @click="changeVoto(-1, 'blanco')" color="error">
                        <v-icon>{{mdiMinus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="text-center">
                      <v-btn @click="changeVoto(1, 'blanco')" color="success">
                        <v-icon>{{mdiPlus}}</v-icon>
                      </v-btn>
                    </td>
                    <td class="px-0">Blanco</td>
                    <td>{{ votosBlanco }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <p class="text-center"><b>Votos totales:</b> {{ votosTotal }}</p>
          <v-card-actions>
            <v-row>
              <v-col cols="12" md="6">
                <v-btn color="grey darken-2" dark block @click="lado === 'diestro'? lado = 'zurdo': lado = 'diestro'">
                  <v-icon left>
                    {{ lado === 'diestro'? mdiArrowLeft: mdiArrowRight }}
                  </v-icon>
                  Cambiar Lado
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn color="warning" block @click="dialogLimpiar=true">
                  <v-icon left>
                    {{ mdiDelete }}
                  </v-icon>
                  Limpiar
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPlus, mdiMinus, mdiDelete, mdiClose, mdiArrowLeft, mdiArrowRight } from '@mdi/js'

export default {
  name: 'Conteo',
  data(){
    return {
      mdiPlus,
      mdiMinus,
      mdiDelete,
      mdiClose,
      mdiArrowLeft,
      mdiArrowRight,
      votosBoric: 0,
      votosKast: 0,
      votosNulo: 0,
      votosBlanco: 0,
      dialogLimpiar: false,
      lado: 'diestro'
    }
  },
  mounted() {
    if (localStorage.votosBoric) {
      this.votosBoric = parseInt(localStorage.votosBoric) || 0;
    }
    if (localStorage.votosKast) {
      this.votosKast = parseInt(localStorage.votosKast) || 0;
    }
    if (localStorage.votosNulo) {
      this.votosNulo = parseInt(localStorage.votosNulo) || 0;
    }
    if (localStorage.votosBlanco) {
      this.votosBlanco = parseInt(localStorage.votosBlanco) || 0;
    }
  },
  watch: {
    votosBoric(aVotosBoric) {
      localStorage.votosBoric = aVotosBoric;
    },
    votosKast(aVotosKast) {
      localStorage.votosKast = aVotosKast;
    },
    votosNulo(aVotosNulo) {
      localStorage.votosNulo = aVotosNulo;
    },
    votosBlanco(aVotosBlanco) {
      localStorage.votosBlanco = aVotosBlanco;
    }
  },
  computed: {
   votosTotal() {
    return this.votosBoric + this.votosKast + this.votosNulo + this.votosBlanco;
   }
  },
  methods: {
    reset() {
      this.votosBoric = 0
      this.votosKast = 0
      this.votosNulo = 0
      this.votosBlanco = 0
      this.dialogLimpiar = false
    },
    changeVoto(numero, tipo) {
      let options;
      if(numero > 0){
        options = {
          duration: 100,
          interval: 0,
          count: 1
        }
      } else {
        options = {
          duration: 50,
          interval: 10,
          count: 2
        }
      }
      this.initVibrate(options)
      switch (tipo) {
        case 'boric':
          if (this.votosBoric + numero < 0) return this.votosBoric = 0
          return this.votosBoric += numero
        case 'kast':
          if (this.votosKast + numero < 0) return this.votosKast = 0
          return this.votosKast += numero
        case 'nulo':
          if (this.votosNulo + numero < 0) return this.votosNulo = 0
          return this.votosNulo += numero
        case 'blanco':
          if (this.votosBlanco + numero < 0) return this.votosBlanco = 0
          return this.votosBlanco += numero
      }
    },
    initVibrate(options = { duration: 100, interval: 100, count: 1 }) {
      if (!window) {
        return;
      }

      if (!window.navigator) {
        return;
      }

      if (!window.navigator.vibrate) {
        return;
      }
      const pattern = [];
      for (let index = 0; index < options.count; index++) {
        pattern.push(options.duration);
        pattern.push(options.interval);
      }
      window.navigator.vibrate(pattern);
    },
  }
}
</script>

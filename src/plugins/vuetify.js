import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import es from 'vuetify/lib/locale/es';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
    },
    theme: {
        themes: {
            light: {
                primary: '',
                secondary: '#094c68',
                accent: colors.grey.lighten3,
            },
        },
    },
});

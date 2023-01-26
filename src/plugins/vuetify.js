// Styles

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable';
import CambiarPassword from '../components/CambiarPassword';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components: {
    VDataTable,
    CambiarPassword,
  },
})

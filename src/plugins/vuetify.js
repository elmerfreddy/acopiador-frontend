// Styles

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components: {
    VDataTable,
  },
})

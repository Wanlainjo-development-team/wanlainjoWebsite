import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives
    })

    // nuxtApp.use(vuetify)
    nuxtApp.vueApp.use(vuetify)
})
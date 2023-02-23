// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { VApp, VAppBar, VFooter, VMain, VContainer, VLayout, VAppBarTitle, VBtn, VDivider, VCard, VCardTitle, VCol, VAlert, VRow, VCardItem, VIcon, VAppBarNavIcon, VCardText, VCardSubtitle, VTextField, VSpacer } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    directives,
    blueprint: md3,
    components: {
      VDataTable, VApp, VAppBar, VFooter, VMain, VContainer, VLayout, VAppBarTitle, VBtn, VDivider, VCard, VCardTitle, VCol, VAlert, VRow, VCardItem, VIcon, VAppBarNavIcon, VCardText, VCardSubtitle, VTextField, VSpacer
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
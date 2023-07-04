import 'i18next'

import en from '../public/locales/en/common.json'
import ptBR from '../public/locales/pt-BR/common.json'

declare module 'i18next' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: 'commmon'
    resources: {
      en: typeof en
      'pt-BR': typeof ptBR
    }
  }
}

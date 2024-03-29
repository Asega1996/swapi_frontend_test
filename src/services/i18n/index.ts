import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { availableNamespaces, fallbackLanguage } from './config'

// I18n setup configuration
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: fallbackLanguage,
        debug: true,
        ns: availableNamespaces,
        defaultNS: 'common',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
            lookupLocalStorage: 'language',
        },
        keySeparator: '.',
    })

export default i18n

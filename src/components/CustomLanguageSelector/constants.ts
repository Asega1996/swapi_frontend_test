import { LanguageEntry } from './types'
import SpainFlag from '@Assets/flags/spain.svg'
import UkFlag from '@Assets/flags/uk.svg'

export const availableLanguages: Array<LanguageEntry> = [
    { code: 'es', icon: SpainFlag, alt: 'es' },
    { code: 'en', icon: UkFlag, alt: 'en' },
]

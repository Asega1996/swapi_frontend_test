import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomLanguageSelector from '.'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18n from 'i18next'

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    ns: [''],
    defaultNS: '',
    debug: true,
    resources: { es: { translationsNS: {} } },
})

export default i18n
// TEST BODY
describe('CustomLanguageSelector ', () => {
    it('should render the available languages', async () => {
        const { getByAltText } = render(<CustomLanguageSelector />)
        expect(getByAltText('es')).toBeDefined()
        expect(getByAltText('en')).toBeDefined()
    })

    it('should check that changeLanguage is called when a icon is triggered', async () => {
        const { getByAltText } = render(
            <I18nextProvider i18n={i18n}>
                <CustomLanguageSelector />
            </I18nextProvider>
        )
        expect(i18n.language).toBe('es')
        fireEvent.click(getByAltText('en'))
        expect(i18n.language).toBe('en')
    })
})

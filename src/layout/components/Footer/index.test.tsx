import { render } from '@testing-library/react'
import Footer from '.'

// MOCKS
jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        }
    },
}))

// TESTING CONSTS
const FOOTER_TEXT_I18N_KEY = 'Common:test'

// TEST BODY
describe('Layout -> Footer', () => {
    it('should contain the i18n text keys w/ titlecase applied', async () => {
        const { getByText } = await render(<Footer />)
        const wrapper = getByText(FOOTER_TEXT_I18N_KEY)
        expect(wrapper).toBeDefined()
    })
})

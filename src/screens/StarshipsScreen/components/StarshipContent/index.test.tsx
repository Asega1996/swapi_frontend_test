import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StarshipContent } from '.'

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

// TESTING CONSTANTS
const DATA_SHEET_I18N_CODE = 'COMMON:DATASHEET'
const TEST_MANUFACTURER = 'Manufacturer Test'

// TEST BODY
describe('StarshipsScreen -> Components -> StarshipsContent', () => {
    it('should render properly with formatted text', async () => {
        const { getByText } = await render(
            <StarshipContent
                manufacturer={TEST_MANUFACTURER}
                cargoCapacity={'50'}
                crew={'30'}
                price={'1000'}
                hyperdriveRating={'2.0'}
            />
        )
        expect(getByText(DATA_SHEET_I18N_CODE)).toBeDefined()
        expect(getByText(TEST_MANUFACTURER)).toBeDefined()
        expect(getByText('common:cargoCapacity: 50')).toBeDefined()
        expect(getByText('common:crew: 30')).toBeDefined()
        expect(getByText('common:price: 1000')).toBeDefined()
        expect(getByText('starships:hyperdriveRating: 2.0')).toBeDefined()
    })
})

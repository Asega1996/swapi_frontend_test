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
const DATA_SHEET_I18N_CODE = 'STARSHIPS:DATASHEET'
const TEST_MANUFACTURER = 'Manufacturer Test'
const CARGO_CAPACITY_I18N_CODE = 'starships:cargoCapacity'
const CREW_I18N_CODE = 'starships:crew'
const PRICE_I18N_CODE = 'starships:price'

// TEST BODY
describe('StarshipsScreen -> Components -> StarshipsContent', () => {
    it('should render properly with formatted text', async () => {
        const { getByText } = await render(
            <StarshipContent
                manufacturer={TEST_MANUFACTURER}
                cargoCapacity={CARGO_CAPACITY_I18N_CODE}
                crew={CREW_I18N_CODE}
                price={PRICE_I18N_CODE}
            />
        )
        expect(getByText(DATA_SHEET_I18N_CODE)).toBeDefined()
        expect(getByText(TEST_MANUFACTURER)).toBeDefined()
    })
})

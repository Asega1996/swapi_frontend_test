import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { VehiclesContent } from '.'

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
describe('VehiclesScreen -> Components -> VehiclesContent', () => {
    it('should render properly with formatted text', async () => {
        const { getByText } = await render(
            <VehiclesContent
                manufacturer={TEST_MANUFACTURER}
                cargoCapacity={'50'}
                crew={'30'}
                price={'1000'}
                maxSpeed={'100'}
                passengers={'0'}
            />
        )
        expect(getByText(DATA_SHEET_I18N_CODE)).toBeDefined()
        expect(getByText(TEST_MANUFACTURER)).toBeDefined()
        expect(getByText('common:cargoCapacity: 50')).toBeDefined()
        expect(getByText('common:crew: 30')).toBeDefined()
        expect(getByText('common:price: 1000')).toBeDefined()
        expect(getByText('vehicles:maxSpeed: 100')).toBeDefined()
        expect(getByText('vehicles:passengers: 0')).toBeDefined()
    })
})

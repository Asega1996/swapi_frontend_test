import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PlanetContent } from '.'

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

jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom')

    return {
        __esModule: true,
        ...originalModule,
        // add your noops here
        useParams: jest.fn(),
        useHistory: jest.fn(),
    }
})

// TESTING CONSTANTS
const TEST_STRING = 'TEST STRING'
const DIAMETER_I18N_CODE = 'PLANETS:DIAMETER'
const POPULATION_I18N_CODE = 'PLANETS:POPULATION'
const ROTATIONPERIOD_I18N_CODE = 'PLANETS:ROTATIONPERIOD'
const ORBITALPERIOD_I18N_CODE = 'PLANETS:ORBITALPERIOD'

// TEST BODY
describe('PlanetsScreen -> Components -> PlanetContent', () => {
    it('should render properly with formatted text', async () => {
        const { getByText } = await render(
            <PlanetContent
                diameter={TEST_STRING}
                orbitalPeriod={TEST_STRING}
                rotationPeriod={TEST_STRING}
                population={TEST_STRING}
            />
        )
        expect(getByText(DIAMETER_I18N_CODE)).toBeDefined()
        expect(getByText(ORBITALPERIOD_I18N_CODE)).toBeDefined()
        expect(getByText(POPULATION_I18N_CODE)).toBeDefined()
        expect(getByText(ROTATIONPERIOD_I18N_CODE)).toBeDefined()
    })
})

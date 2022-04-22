import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlanetScreen from '.'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

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

const mockStore = configureStore()
const storeSuccess = mockStore({
    planets: {
        fetching: false,
        success: true,
        error: false,
        availablePlanets: {
            totalElements: 3,
            data: [{ name: 'Test1' }, { name: 'Test2' }, { name: 'Test3' }],
        },
    },
})

const storeError = mockStore({
    planets: {
        fetching: false,
        success: false,
        error: true,
        availablePlanets: {},
    },
})

const storeFetching = mockStore({
    planets: {
        fetching: true,
        success: false,
        error: true,
        availablePlanets: {},
    },
})

// TESTING CONSTANTS
const PLANETS_TITLE = 'planets:title'
const PROGRESS_BAR_ROLE = 'progressbar'

// TEST BODY
describe('PlanetsScreen', () => {
    it('should render the screen title code', async () => {
        const { getByText } = await render(
            <Provider store={storeSuccess}>
                <PlanetScreen />
            </Provider>
        )
        expect(getByText(PLANETS_TITLE)).toBeDefined()
    })

    it('should render a list of planets when store is success', async () => {
        const { getByText } = await render(
            <Provider store={storeSuccess}>
                <PlanetScreen />
            </Provider>
        )
        expect(getByText('Test1')).toBeDefined()
        expect(getByText('Test2')).toBeDefined()
        expect(getByText('Test3')).toBeDefined()
    })

    it('should render a loader when store is fetching', async () => {
        const { getByText, getByRole } = await render(
            <Provider store={storeFetching}>
                <PlanetScreen />
            </Provider>
        )
        expect(getByText('common:loading')).toBeDefined()
        expect(getByRole(PROGRESS_BAR_ROLE)).toBeDefined()
    })

    it('should render an error message when store is error', async () => {
        const { getByText } = await render(
            <Provider store={storeError}>
                <PlanetScreen />
            </Provider>
        )
        expect(getByText('common:errorMessage')).toBeDefined()
    })
})

import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import VehiclesScreen from '.'
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
    vehicles: {
        fetching: false,
        success: true,
        error: false,
        availableVehicles: {
            totalElements: 3,
            data: [{ name: 'Starship' }, { name: 'Test' }, { name: 'Sample' }],
        },
    },
})

const storeError = mockStore({
    vehicles: {
        fetching: false,
        success: false,
        error: true,
        availableVehicles: {},
    },
})

const storeFetching = mockStore({
    vehicles: {
        fetching: true,
        success: false,
        error: true,
        availableVehicles: {},
    },
})

// TESTING CONSTANTS
const PLANETS_TITLE = 'vehicles:title'
const PROGRESS_BAR_ROLE = 'progressbar'
const PLACEHOLDER_TEXT = 'vehicles:searchByName'

// TEST BODY
describe('VehiclesScreen', () => {
    it('should render the screen title code', async () => {
        const { getByText } = await render(
            <Provider store={storeSuccess}>
                <VehiclesScreen />
            </Provider>
        )
        expect(getByText(PLANETS_TITLE)).toBeDefined()
    })

    describe('Fetching State', () => {
        it('should render a loader when store is fetching', async () => {
            const { getByText, getByRole } = await render(
                <Provider store={storeFetching}>
                    <VehiclesScreen />
                </Provider>
            )
            expect(getByText('common:loading')).toBeDefined()
            expect(getByRole(PROGRESS_BAR_ROLE)).toBeDefined()
        })
    })

    describe('Error State', () => {
        it('should render an error message when store is error', async () => {
            const { getByText } = await render(
                <Provider store={storeError}>
                    <VehiclesScreen />
                </Provider>
            )
            expect(getByText('common:errorMessage')).toBeDefined()
        })
    })

    describe('Success State', () => {
        it('should render a list of vehicles when store is success', async () => {
            const { getByText } = await render(
                <Provider store={storeSuccess}>
                    <VehiclesScreen />
                </Provider>
            )
            expect(getByText('Starship')).toBeDefined()
            expect(getByText('Test')).toBeDefined()
            expect(getByText('Sample')).toBeDefined()
        })

        it('should hide results when user try a filer', async () => {
            const { getByPlaceholderText, queryByText } = await render(
                <Provider store={storeSuccess}>
                    <VehiclesScreen />
                </Provider>
            )

            await fireEvent.change(getByPlaceholderText(PLACEHOLDER_TEXT), {
                target: { value: 'S' },
            })

            expect(queryByText('Starship')).not.toBeNull()
            expect(queryByText('Test')).toBeNull()
            expect(queryByText('Sample')).not.toBeNull()
        })
    })
})

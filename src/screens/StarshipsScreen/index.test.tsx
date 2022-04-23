import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import StarshipsScreen from '.'
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
    starships: {
        fetching: false,
        success: true,
        error: false,
        availableStarships: {
            totalElements: 3,
            data: [{ name: 'Starship' }, { name: 'Test' }, { name: 'Sample' }],
        },
    },
})

const storeError = mockStore({
    starships: {
        fetching: false,
        success: false,
        error: true,
        availableStarships: {},
    },
})

const storeFetching = mockStore({
    starships: {
        fetching: true,
        success: false,
        error: true,
        availableStarships: {},
    },
})

// TESTING CONSTANTS
const PLANETS_TITLE = 'starships:title'
const PROGRESS_BAR_ROLE = 'progressbar'
const PLACEHOLDER_TEXT = 'starships:searchByName'

// TEST BODY
describe('StarshipsScreen', () => {
    it('should render the screen title code', async () => {
        const { getByText } = await render(
            <Provider store={storeSuccess}>
                <StarshipsScreen />
            </Provider>
        )
        expect(getByText(PLANETS_TITLE)).toBeDefined()
    })

    describe('Fetching State', () => {
        it('should render a loader when store is fetching', async () => {
            const { getByText, getByRole } = await render(
                <Provider store={storeFetching}>
                    <StarshipsScreen />
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
                    <StarshipsScreen />
                </Provider>
            )
            expect(getByText('common:errorMessage')).toBeDefined()
        })
    })

    describe('Success State', () => {
        it('should render a list of starships when store is success', async () => {
            const { getByText } = await render(
                <Provider store={storeSuccess}>
                    <StarshipsScreen />
                </Provider>
            )
            expect(getByText('Starship')).toBeDefined()
            expect(getByText('Test')).toBeDefined()
            expect(getByText('Sample')).toBeDefined()
        })

        it('should hide results when user try a filer', async () => {
            const { getByPlaceholderText, queryByText } = await render(
                <Provider store={storeSuccess}>
                    <StarshipsScreen />
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

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import HorizontalMenu from '.'

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
const MENU_1 = 'COMMON:PLANETS'
const MENU_2 = 'COMMON:STARSHIPS'
const MENU_3 = 'COMMON:VEHICLES'

// TEST BODY
describe('Header -> Components -> HorizontalMenu', () => {
    it('should render the 3 current options', async () => {
        const { getByText } = await render(
            <BrowserRouter>
                <HorizontalMenu />
            </BrowserRouter>
        )
        expect(getByText(MENU_1)).toBeDefined()
        expect(getByText(MENU_2)).toBeDefined()
        expect(getByText(MENU_3)).toBeDefined()
    })

    it('should check the sanity of the links', async () => {
        const { getByText } = await render(
            <BrowserRouter>
                <HorizontalMenu />
            </BrowserRouter>
        )
        expect(getByText(MENU_1).closest('a')).toHaveAttribute('href', '/')
        expect(getByText(MENU_2).closest('a')).toHaveAttribute(
            'href',
            '/starships'
        )
        expect(getByText(MENU_3).closest('a')).toHaveAttribute(
            'href',
            '/vehicles'
        )
    })
})

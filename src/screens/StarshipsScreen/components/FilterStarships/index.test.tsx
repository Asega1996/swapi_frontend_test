import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterStarships from '.'

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

let setInputFilter = jest.fn()
let setCurrentPage = jest.fn()
let setOrdenationFilter = jest.fn()

// TESTING CONST
const PLACEHOLDER_TEXT = 'starships:searchByName'
const CARGO_DES_I18N_CODE = 'starships:cargoDes'
const CARGO_ASC_I18N_CODE = 'starships:cargoAsc'
const CREW_DES_I18N_CODE = 'starships:crewDes'
const CREW_ASC_I18N_CODE = 'starships:crewAsc'

// TEST BODY
describe('StarshipsScreen -> Components -> FilterStarships', () => {
    beforeEach(() => {
        setInputFilter = jest.fn()
        setCurrentPage = jest.fn()
        setOrdenationFilter = jest.fn()
    })

    it('should render properly', async () => {
        const { container, getByPlaceholderText } = await render(
            <FilterStarships
                setInputFilter={setInputFilter}
                setCurrentPage={setCurrentPage}
                setOrdenationFilter={setOrdenationFilter}
            />
        )
        expect(container).toBeDefined()
        expect(getByPlaceholderText(PLACEHOLDER_TEXT)).toBeDefined()
    })

    it('should call setInputFilter & setCurrentPage when something change in the input', async () => {
        const { getByPlaceholderText } = await render(
            <FilterStarships
                setInputFilter={setInputFilter}
                setCurrentPage={setCurrentPage}
                setOrdenationFilter={setOrdenationFilter}
            />
        )
        expect(setInputFilter).not.toHaveBeenCalled()
        expect(setCurrentPage).not.toHaveBeenCalled()
        fireEvent.change(getByPlaceholderText(PLACEHOLDER_TEXT), {
            target: { value: 'test' },
        })
        expect(setInputFilter).toHaveBeenCalledWith('test')
        expect(setCurrentPage).toHaveBeenCalledWith(1)
    })

    it('should open the options when selector is clicked', async () => {
        const { getByPlaceholderText } = await render(
            <FilterStarships
                setInputFilter={setInputFilter}
                setCurrentPage={setCurrentPage}
                setOrdenationFilter={setOrdenationFilter}
            />
        )

        await fireEvent.click(getByPlaceholderText('Filters').cloneNode())
        expect(CARGO_DES_I18N_CODE).toBeDefined()
        expect(CARGO_ASC_I18N_CODE).toBeDefined()
        expect(CREW_DES_I18N_CODE).toBeDefined()
        expect(CREW_ASC_I18N_CODE).toBeDefined()
    })
})

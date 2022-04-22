import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomLoader from '.'

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
const LOADING_I18N_KEY = 'common:loading'
const PROGRESS_BAR_ROLE = 'progressbar'

describe('CustomLoader', () => {
    it('should render the i18n key of loading', async () => {
        const { getByText } = await render(<CustomLoader />)
        expect(getByText(LOADING_I18N_KEY)).toBeDefined()
    })

    it('should render a circular progress', async () => {
        const { getByRole } = await render(<CustomLoader />)
        expect(getByRole(PROGRESS_BAR_ROLE)).toBeDefined()
    })
})

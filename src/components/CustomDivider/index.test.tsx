import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import theme from '@Styles/theme'
import CustomDivider from '.'

// TESTING CONSTS

const TEST_DEFAULTS_MT = '1rem'
const TEST_DEFAULTS_MB = '1rem'
const TEST_DEFAULTS_COLOR = theme.palette.primary.main
const TEST_DEFAULTS_WIDTH = '2.25rem'

describe('CustomDivider component testing', () => {
    it('should render without any error', async () => {
        const { container } = await render(<CustomDivider />)

        expect(container.firstChild?.firstChild).toHaveStyle(
            `width: ${TEST_DEFAULTS_WIDTH}`
        )
        expect(container.firstChild?.firstChild).toHaveStyle(
            `background-color: ${TEST_DEFAULTS_COLOR}`
        )
        expect(container.firstChild).toHaveStyle(
            `margin-top: ${TEST_DEFAULTS_MT}`
        )
        expect(container.firstChild).toHaveStyle(
            `margin-bottom: ${TEST_DEFAULTS_MB}`
        )
    })
})

import React from 'react'
import CustomTypography from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import theme from '@Styles/theme'

// TESTING CONSTS

const TEST_ALIGNMENT = 'center'
const TEST_COLOR = 'red'
const TEST_FONT_FAMILY = 'Quicksand'
const TEST_FONTSIZE = '3rem'
const TEST_FONT_STYLE = 'normal'
const TEST_FONT_WEIGHT = '700'
const TEST_LETTER_SPACING = '3px'
const TEST_LINE_HEIGHT = '1.5rem'
const TEST_TEXT = 'Test Text'

const TEST_DEFAULTS_ALIGNMENT = 'left'
const TEST_DEFAULTS_COLOR = theme.palette.primary.main
const TEST_DEFAULTS_FONT_FAMILY = 'inherit'
const TEST_DEFAULTS_FONTSIZE = '1rem'
const TEST_DEFAULTS_FONT_STYLE = 'normal'
const TEST_DEFAULTS_FONT_WEIGHT = 'normal'
const TEST_DEFAULTS_LETTER_SPACING = '0'
const TEST_DEFAULTS_LINE_HEIGHT = '1.5rem'
const TEST_DEFAULTS_TEXT = 'Test Text'

describe('CustomTypography component testing', () => {
    it('should render without any error & default props', async () => {
        await render(<CustomTypography>{TEST_DEFAULTS_TEXT}</CustomTypography>)
        expect(screen.getByText('Test Text')).toHaveStyle(
            `color: ${TEST_DEFAULTS_COLOR}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-size: ${TEST_DEFAULTS_FONTSIZE}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-family: ${TEST_DEFAULTS_FONT_FAMILY}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `line-height: ${TEST_DEFAULTS_LINE_HEIGHT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `text-align: ${TEST_DEFAULTS_ALIGNMENT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-style: ${TEST_DEFAULTS_FONT_STYLE}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-weight: ${TEST_DEFAULTS_FONT_WEIGHT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `letter-spacing: ${TEST_DEFAULTS_LETTER_SPACING}`
        )
    })

    it('should render without any error & custom props', async () => {
        await render(
            <CustomTypography
                textAlign={TEST_ALIGNMENT}
                color={TEST_COLOR}
                fontSize={TEST_FONTSIZE}
                fontStyle={TEST_FONT_STYLE}
                fontWeight={TEST_FONT_WEIGHT}
                letterSpacing={TEST_LETTER_SPACING}
                lineHeight={TEST_LINE_HEIGHT}
                fontFamily={TEST_FONT_FAMILY}
            >
                {TEST_TEXT}
            </CustomTypography>
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `color: ${TEST_COLOR}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-size: ${TEST_FONTSIZE}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-family: ${TEST_FONT_FAMILY}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `line-height: ${TEST_LINE_HEIGHT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `text-align: ${TEST_ALIGNMENT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `font-weight: ${TEST_FONT_WEIGHT}`
        )
        expect(screen.getByText('Test Text')).toHaveStyle(
            `letter-spacing: ${TEST_LETTER_SPACING}`
        )
    })
})

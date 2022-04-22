import React from 'react'
import { Grid } from '@mui/material'

import { SCFlag } from './styles'
import { useTranslation } from 'react-i18next'
import { checkIfLanguagesAreTheSame } from '@Utils/checkIfLanguagesAreTheSame'
import useWindowDimensions from '../../hooks/useWindowSizes'
import breakpoints from '@Styles/breakpoints'
import theme from '@Styles/theme'
import { availableLanguages } from './constants'

const CustomLanguageSelector = () => {
    // Hooks
    const { i18n } = useTranslation()
    const { width } = useWindowDimensions()

    // Functions
    const changeI18nLanguage = (language: string) => {
        language !== i18n.language ? i18n.changeLanguage(language) : null
    }

    return (
        <Grid justifyContent="center" item>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {/* Array of langs iteration */}
                {availableLanguages.map((language, index) => (
                    <Grid key={index} item>
                        <SCFlag
                            onClick={() => changeI18nLanguage(language.code)}
                            selected={checkIfLanguagesAreTheSame(
                                i18n.language,
                                language.code
                            )}
                            color={
                                width > breakpoints.MD_BREAKPOINT
                                    ? 'white'
                                    : theme.palette.primary.main
                            }
                            src={language.icon}
                            alt={language.alt}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default CustomLanguageSelector

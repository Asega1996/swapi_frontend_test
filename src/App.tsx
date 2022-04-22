import React from 'react'
// App Layout
import Layout from './layout'
// UI theme provider
import { ThemeProvider } from '@emotion/react'
import theme from '@Styles/theme'
// Internalization provider
import { I18nextProvider } from 'react-i18next'
import i18n from '@Services/i18n'
// Routing
import { BrowserRouter } from 'react-router-dom'
// Redux provider
import { Provider } from 'react-redux'
import configureStore from './store'

function App() {
    const { store } = configureStore()
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Layout />
                    </BrowserRouter>
                </ThemeProvider>
            </I18nextProvider>
        </Provider>
    )
}

export default App

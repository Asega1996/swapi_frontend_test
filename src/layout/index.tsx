import React from 'react'
// Screen UI imports
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
    return (
        <>
            {/* Application Header*/}
            <Header />
            {/* Application Content -> Router*/}
            <Content />
            {/* Application Footer*/}
            <Footer />
        </>
    )
}

export default Layout

import { render } from '@testing-library/react'
import Header from '.'

// TEST BODY
describe('Layout -> Header', () => {
    it('should contain the company logo', async () => {
        const { getByAltText } = await render(<Header />)
        const image = getByAltText('company_logo')
        expect(image).toBeDefined()
    })
})

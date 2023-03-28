import Home from './'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
 
describe('The Home Component', () => {
    it('Should render title', async () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )
        expect(screen.getByText('Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents')).toBeTruthy()
        expect(screen.getByRole('heading', {
            level: 2,
            text : 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
        }))
        // screen.debug()
    })
})
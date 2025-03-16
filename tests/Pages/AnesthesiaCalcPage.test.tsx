import { describe, expect, it } from 'vitest'
import { AnesthesiaCalcPage } from '../../src/Pages/AnesthesiaCalcPage'
import { screen } from '@testing-library/dom'
//import { render } from '@testing-library/react'

describe('Anesthesia Calc Page', () => {
    it('Render something on the screen', () => {
        render(<AnesthesiaCalcPage />)
        const potato = screen.getByTestId('potato')
        expect(potato).toHaveTextContent('asdf')
    })
})

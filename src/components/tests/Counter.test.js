
import {render, fireevent, getAllByText, getByTitle, fireEvent } from '@testing-library/react'
import { QuantityButton } from '../../components/QuantityButton';

describe(QuantityButton, () => {

    it('counter should have initial value of 1', () => {
        // arrange - förberedelser
            const { getByTestId  } = render(   <QuantityButton init={0}  />)
      
        const value = Number(getByTestId('count').textContent)

        // assert - utvärdering
        expect(value).toEqual(0)
    })

    it('count should increment by 1 if the increment button is pressed', () => {
        const { getByTestId, getByRole  } = render(   <QuantityButton init={0}  />)
        const button = getByRole('button', {name: 'increment'})
        fireEvent.click(button)
        const value = Number(getByTestId('count').textContent)
        expect(value).toEqual(0)
    })
    it('count should decrement by 1 if the decrement button is pressed', () => {
        const { getByTestId, getByRole  } = render(   <QuantityButton init={12}  />)
        const button = getByRole('button', {name: 'decrement'})
        fireEvent.click(button)
        const value = Number(getByTestId('count').textContent)
        expect(value).toEqual(0)
    })

})
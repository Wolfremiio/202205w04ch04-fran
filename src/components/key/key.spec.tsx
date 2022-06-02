import { screen, render } from '@testing-library/react';
import Key from './key';



describe('Given the component Key', () => {

    const mockKey = 'Test String'



    describe('Given the component Key', () => {

        test('Then it should render', () => {

            //Arrange & Act

            render(<Key value={mockKey} />);

            const labelInput = screen.getByText(/test/i);

            //Assert

            expect(labelInput).toBeInTheDocument();

        });

    });

});
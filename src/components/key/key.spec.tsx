import { screen, render } from '@testing-library/react';
import Key from './key';



describe('Given the component Key', () => {

    const mockKey = {

        className: 'test className',


    };



    describe('Given the component Key', () => {

        test('Then it should render', () => {

            //Arrange & Act

            render(<Key className={mockKey.className}  />);

            const labelInput = screen.getByText(/test className/i);

            //Assert

            expect(labelInput).toBeInTheDocument();

        });

    });

});
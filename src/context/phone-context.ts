
import { createContext } from 'react';

const initialContext: {
    display: string;
    addNumber: (number: string) => void;
    call: boolean;
    startCall: () => void;

} = {
    display: '',
    addNumber: () => {},
    call: false,
    startCall: () => {},

};

export const PhoneContext = createContext(initialContext);
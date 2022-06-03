
import { createContext } from 'react';
import Call from '../components/actions/call';
import Display from '../components/actions/display';
import Hang from '../components/actions/hang';

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
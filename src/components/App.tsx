import * as React from 'react';

import Calculator from '../containers/Calculator';
import { Topnav } from './Topnav';

class App extends React.Component {
    public render() {
        return (
            <div>
                <Topnav title="Resistor Ohm Value Calculator" />
                <Calculator />
            </div>
        );
    }
}

export default App;

import React from 'react';
import {render} from 'react-dom';
import './assets/index.scss';

const App: React.SFC<{}> = () => (
    <h1>Application</h1>
);

render(<App/>, document.getElementById("root"));
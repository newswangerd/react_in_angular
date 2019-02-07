import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Test extends React.Component<{}, {}> {
    render() {
        return <h1> Hello World</h1>
    }
}

export class ReactTest {
    static init() {
        ReactDOM.render(
            <Test />,
            document.getElementById('react-container'),
        );
    }
}

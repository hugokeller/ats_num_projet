import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Header from '../Header';
import './style.css';

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <Header />
            </div>
        );
    }
}

export default App;
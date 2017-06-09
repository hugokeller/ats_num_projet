import React from 'react';

class Hvac extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h4>HVAC : {this.props.sNomHvac}</h4>
        )
    }
}

export default Hvac;







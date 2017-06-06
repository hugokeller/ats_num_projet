import React from 'react';

class Hvac extends React.Component {
    constructor(props){
        super(props);
        console.log (props);
    }

    render() {
        return (
            <h4>HVAC : {this.props.hvac.sNomHvac}</h4>
        )
    }
}

export default Hvac;







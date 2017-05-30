import React from 'react';
import {connect} from 'react-redux';
import {changeInput} from '../actions';

let Input = ({type = 'text', name, label, className = 'col-xs-12', onInputChange}) => {
    let input;
    return (
        <div key={name} className={`form-group ${className}`}>
            <label htmlFor={name}>{label}</label>
            <input className='form-control'
                   ref={node => {
                       input = node;
                   }}
                   type={type}
                   name={name}
                   onChange={() => {
                       onInputChange(name, input)
                   }}
            />
        </div>
    );
};

const mapDispatchToInputProps = (dispatch) => ({
    onInputChange: (name, item) => {
        dispatch(changeInput(name, item.value))
    }
});

const FormInput = connect(null, mapDispatchToInputProps)(Input);
export default FormInput;
import React from 'react';
import './style.scss';

class InputBox extends React.Component{
    onChange = (event) =>{
        const { name, onChange } = this.props;
        const { value } = event.target;
        onChange && onChange(name,value);
    }
    render() {
    const { lableName, name, disable, value = '' , placeholder = '' , InputType = 'text', errorMessage, ...other } = this.props;
        return(
            <div className = { `form-group ${errorMessage && 'error'}` }>
            {lableName && <label>{lableName}</label>}
            <input
                {...other}
                type = { InputType }
                value = { value }
                name = { name }
                onChange = { this.onChange }
                placeholder = { placeholder }
                disabled = {disable}
            />
            {errorMessage && <label className={`${errorMessage && 'error-message'}`}></label>}
            </div>
        )
    }
};

export default InputBox;
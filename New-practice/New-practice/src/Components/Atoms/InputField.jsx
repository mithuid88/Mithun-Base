import React from 'react';

const InputField = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    );
};

export default InputField;

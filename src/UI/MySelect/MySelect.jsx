import React from 'react';

const MySelect = ({defaultValue, options, onChange, value, filter}) => {
    return (
        <select value={value} onChange={ (e) => onChange({...filter, sort: e.target.value}) }>
            <option disabled value={''}>{defaultValue}</option>
            {options.map( option => <option value={option.value}
            key={option.name}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;
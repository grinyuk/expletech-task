import React from 'react';

const Dropdown = ({onValueChange, categories}) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onValueChange(selectedValue);
    }

    return (
        <select
            onChange={handleSelectChange}
        >
            <option defaultValue value={'All'}>All categories</option>
            {categories && categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    );
};

export {Dropdown};
import React from 'react';

import css from './Dropdown.module.css';

const Dropdown = ({onValueChange, categories}) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onValueChange(selectedValue);
    }

    return (
        <select
            id={'categories_list'}
            className={css.dropdownCategories}
            onChange={handleSelectChange}
        >
            <option defaultValue value={'All'}>All categories</option>
            {categories && categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    );
};

export {Dropdown};
import React, { useEffect, useState } from 'react';
import Filter from '../Filter';
import './styles.scss';

const FilterList = ({ title, filterList, filterChangeHandler, name }) => {
    const [allFilters, setAllFilters] = useState([]);

    useEffect(() => {
        if (filterList) {
            setAllFilters(filterList);
        }
    }, [filterList]);

    const singleFilterHandler = (selectedValue) => {
        let tempFilters = [...allFilters];
        const returnFilter = {};
        const selectedIndex = tempFilters.findIndex((i) => i.value === selectedValue);
        if(tempFilters[selectedIndex].isSelected) {
            tempFilters[selectedIndex].isSelected = 'false';
            returnFilter[name] = null;
        } else {
            tempFilters = tempFilters.map((filter) => { return {...filter, isSelected: false};});
            tempFilters[selectedIndex].isSelected = 'true';
            returnFilter[name] = selectedValue;
        }
        setAllFilters([...tempFilters]);
        filterChangeHandler(returnFilter);
    };

    return (
        <div className="filter-list">
            <h3>{title}</h3>
            <ul>
                {allFilters && allFilters.length > 0 && allFilters.map(({ text, value, isSelected }) => (
                    <Filter text={text} value={value} isSelected={isSelected} clickHandler={singleFilterHandler} />
                ))}
            </ul>
        </div>
    );
}

export default FilterList;

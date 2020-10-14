import React, { useState, useEffect } from 'react';
import { yearConfig, launchConfig, successConfig } from '../../config/config';
import './styles.scss';
import FilterList from '../../components/FilterList';

const FilterColumn = ({ updateDataFilter }) => {

  const [filtersObject, setFiltersObject] = useState({});

  useEffect(() => {
    updateDataFilter(filtersObject);
  }, [filtersObject])

  const updateFilter = (newFilter) => {
    setFiltersObject({...filtersObject, ...newFilter});
  };

  return (
    <div className="filter-column">
        <h2>Filters</h2>
        <FilterList title="Launch Year" filterList={yearConfig} filterChangeHandler={updateFilter} name="launch_year" />
        <FilterList title="Successful Launch" filterList={launchConfig} filterChangeHandler={updateFilter} name="launch_success" />
        <FilterList title="Successful Landing" filterList={successConfig} filterChangeHandler={updateFilter} name="land_success" />
    </div>
  );
}

export default FilterColumn;

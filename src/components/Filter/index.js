import React from 'react';
import clsx from 'clsx';
import './styles.scss';

const Filter = ({ text, value, clickHandler, isSelected }) => {
  return (
    <button className={clsx("filter-btn", {'selected': isSelected})} onClick={() => clickHandler(value)}>{text}</button>
  );
}

export default Filter;

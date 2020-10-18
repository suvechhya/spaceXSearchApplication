import React from 'react';
import { string, func, bool } from 'prop-types';
import clsx from 'clsx';
import './styles.scss';

const Filter = ({ text, value, clickHandler, isSelected }) => {
  return (
    <button className={clsx("filter-btn", {'selected': isSelected})} onClick={() => clickHandler(value)}>{text}</button>
  );
}

Filter.props = {
  text: string.isRequired,
  value: string.isRequired,
  clickHandler: func.isRequired,
  isSelected: bool.isRequired,
}

export default Filter;

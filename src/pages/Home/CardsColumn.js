import React, { useState, useEffect } from 'react';
import './styles.scss';
import Card from '../../components/Card';

const CardsColumn = ({ dataList }) => {
    return (
        <div className="homepage__grid">
            {dataList && dataList.length > 0 && dataList.map((launch) => (
                <div className="homepage__grid__item">
                    <Card item={launch} />
                </div>
            ))}
        </div>
    );
}

export default CardsColumn;

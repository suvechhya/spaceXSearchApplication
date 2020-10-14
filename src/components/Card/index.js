import React from 'react';
import './styles.scss';

const Card = ({ item: {mission_id,
    mission_name,
    launch_landing,
    launch_success,
    launch_year,
    mission_patch }}) => {
  return (
    <div className="card">
        <div className="card__image">
            <img src={mission_patch} />
        </div>
        <h3 className="card__name">{mission_name}</h3>
        <div className="card__section card__mission-id">
            <strong>Mission Ids:</strong>
            <ul>
                {mission_id && mission_id.length > 0 && mission_id.map((id) => (
                    <li>{id}</li>
                ))}
            </ul>
        </div>
        <div className="card__section card__launch-year">
            <strong>Launch Year: </strong>
            <span>{launch_year}</span>
        </div>
        <div className="card__section card__successful-launch">
            <strong>Successful Launch: </strong>
            <span>{launch_success}</span>
        </div>
        <div className="card__section card__launch-landing">
            <strong>Successful Landing: </strong>
            <span>{launch_landing}</span>
        </div>
    </div>
  );
}

export default Card;

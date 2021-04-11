import React from 'react';
import Card from "./Card";

const CardList = (props) => (
    <div>
        {/* eslint-disable react/jsx-key */}
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
);

export default CardList;
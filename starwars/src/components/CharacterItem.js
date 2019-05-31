import React from 'react';

const CharacterItem = props => {
    return(
        <div class="item">
            <p className="element">name: {props.name}</p>
            <p className="element">eyes: {props.eye}</p>
        </div>
    );
}

export default CharacterItem;
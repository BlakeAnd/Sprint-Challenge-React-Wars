import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = props => {
    return (
        <div>
            {props.characterItems.map(item => {
                return (
                    <CharacterItem
                        key={item.created}
                        name={item.name}
                        eye={item.eye_color}
                        gender={item.gender}
                    />
                );
            })}

            <CharacterItem />
        </div>
    );
}

export default CharacterList;
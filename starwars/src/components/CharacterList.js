import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = props => {
    console.log(props.characterItems);
    return(
        <div>
            {props.characterItems.map(item => {
                return(
                   <CharacterItem
                   key={item.created}
                   name={item.name}
                   eye={item.eye_color}
                   />
                );
            })}
           
            <CharacterItem />
        </div>
    );
}
//name={item.name}
export default CharacterList;
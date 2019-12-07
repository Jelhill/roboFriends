import React from 'react';
import Card from './Card';
const CardList = ({myFriends}) => {
    return(
        <div>
            {
            myFriends.map((friends, i) => {
               return (
                  <Card key={i} id={myFriends[i].id} name={myFriends[i].name} email={myFriends[i].email} />
                );
            }
        )
    }
        </div>
    );
}

export default CardList;    
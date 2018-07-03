import React from 'react';
import Card from '../components/Card';

const CardList = ({ friends }) => {
    const cardComponent = friends.map((user, i) => {
        return (
            <Card key={i} id={friends[i].id} name={friends[i].name} username={friends[i].username} email={friends[i].email} />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;
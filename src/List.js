import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, state, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />

            <div>
              <h5>ID: {person.id}</h5>
              <h4>Name: {name}</h4>
              <h4>Contry: {state}</h4>
              <p>Years: {age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
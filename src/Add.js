import React from 'react';

function Add() {
  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    // const newThingText = `Thing ${things.length + 1}`;
    setThingsArray((prevState) => {
      return [...prevState, `Thing ${prevState.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default Add;

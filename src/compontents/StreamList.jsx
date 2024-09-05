import React from 'react';

function StreamList() {
    const handleInput = (event) => {
      console.log(event.target.value);
    };

    return (
      <div className="stream-list">
        <h1>StreamList</h1>
        <input type="text" placeholder="Enter movie or show" onChange={handleInput} />
      </div>
    );
}

export default StreamList;

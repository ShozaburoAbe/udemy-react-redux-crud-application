import React from 'react';

const App = () => {
    return (
        <>
            <label htmlFor="bar">bar</label>
            <input type="text" onChange={(event) => console.log(event.target.value)}/>
        </>
  );
};

export default App;

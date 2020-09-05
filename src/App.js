import React from 'react';

// class App extends React.Component {
//     render() {
//         return (
//             <>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={(event) => console.log(event.target.value)}/>
//             </>
//         );
//     }
// }

const App = () => {
    return (
        <div>
            <Cat />
            <Cat />
        </div>
    )
};

const Cat = () => {
    return (
        <div>Mew</div>
    );
};

export default App;

import React from 'react';

const App = () => {
    const profiles = [
        {
            name: "Taro",
            age: 23
        },
        {
            name: "Hana",
            age: 4
        },
        {
            name: "ge"
        }
    ]
    return (
        <div>
            {profiles.map( (profile, index) => (
                <User name={profile.name} age={profile.age} key={index}/>
            ))}
        </div>
    )
};

const User = (props) => {
    return (
        <div>Hi, I am {props.name} and {props.age} </div>
    );
};

User.defaultProps = {
    age: 1
}

export default App;

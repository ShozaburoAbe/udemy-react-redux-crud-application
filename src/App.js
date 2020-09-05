import React from 'react';
import PropTypes from 'prop-types'

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
            name: "Noname",
            age: 15
        }
    ]
    return (
        <div>
            {profiles.map((profile, index) => (
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

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;

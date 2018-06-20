import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <h2>Landing</h2>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Landing;

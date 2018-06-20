import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const auth_token = localStorage.getItem('auth_token');
        // localStorage.removeItem('auth_token');

        return (
            <div>
                <Link to="/">
                    <h2>Header</h2>
                </Link>
                <h3>{auth_token}</h3>
            </div>
        );
    }
}

export default Header;

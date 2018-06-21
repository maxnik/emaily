import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        // const auth_token = localStorage.getItem('auth_token');
        // localStorage.removeItem('auth_token');

        return (
            <header class="menu section">
                <div class="container">
                    <div class="header-top">
                        <Link to="/">
                            <h1>Emaily</h1>
                        </Link>

                        <Link to="/login">Login</Link>
                    </div>

                    <nav>
                        <a href="#">Sets</a>
                        <a href="#">Practice</a>
                        <a href="#">Recent</a>
                        <a href="#">Help</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;

import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class LoginGoogle extends React.Component {
    render() {
        const cookies = new Cookies();
        const auth_token = cookies.get('auth_token');

        if (auth_token) {
            cookies.remove('auth_token');
            localStorage.setItem('auth_token', auth_token);
            return <Redirect to="/dashboard" />;
        }

        return (
            <div>
                <h2>Unauthorized</h2>
            </div>
        );
    }
}

export default LoginGoogle;

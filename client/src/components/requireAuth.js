import React from 'react';
import { Redirect } from 'react-router-dom';

function requireAuth(WrappedComponent) {
    return class extends React.Component {
        render() {
            const auth_token = localStorage.getItem('auth_token');

            if (!auth_token) {
                return <Redirect to="/login" />;
            }

            return <WrappedComponent />;
        }
    };
}

export default requireAuth;

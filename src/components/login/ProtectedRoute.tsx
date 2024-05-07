import React, { useState, useEffect } from 'react';
import LoginPromptDialog from '../popup/PromptDialog';

const isAuthenticated = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    if (!token || !tokenExpiration || Date.now() >= parseInt(tokenExpiration)) {
        return false; // No token or expired token
    }

    try {
        const response = await fetch('https://tripselbe.fly.dev/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            return false; // Non-ok response from backend
        }

        return true; // User is authenticated
    } catch (error) {
        console.error('Error checking authentication:', error);
        return false; // Error occurred during authentication check
    }
};

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [showLoginPrompt, setShowLoginPrompt] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticated = await isAuthenticated();
            setShowLoginPrompt(!authenticated);
        };

        checkAuthentication();
    }, []);

    if (showLoginPrompt) {
        return <LoginPromptDialog open={true} onClose={() => setShowLoginPrompt(false)} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

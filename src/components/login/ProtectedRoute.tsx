import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import LoginPromptDialog from '../popup/PromptDialog';
const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    return !!token && !!tokenExpiration && Date.now() < parseInt(tokenExpiration);
};

interface ProtectedRouteProps {
  children: React.ReactNode; // Change the type to React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [showLoginPrompt, setShowLoginPrompt] = useState(true);
  
    if (!isAuthenticated()) {
      return (
        <>
          <LoginPromptDialog open={showLoginPrompt} onClose={() => setShowLoginPrompt(false)} />
        </>
      );
    }
    

  return <>{children}</>; // Render children directly
};

export default ProtectedRoute;

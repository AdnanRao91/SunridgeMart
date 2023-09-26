import { useEffect } from 'react';
import { TokenStorage } from "@/utils"
const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const handleToken = new TokenStorage
        let token = handleToken.getToken()
        useEffect(() => {
            if (!token) {
                window.location.href = 'login'; // Replace '/login' with your desired login page URL
            }
        }, [token]);

        return (
            <WrappedComponent {...props} />
        );
    };

    Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return Wrapper;
};

export default withAuth;
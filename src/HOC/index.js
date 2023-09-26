import { useEffect } from 'react';
import { TokenStorage } from "../utils"
import { useRouter } from 'next/router';
const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter()
        const handleToken = new TokenStorage
        let token = handleToken.getToken()
                useEffect(() => {
            if (router.pathname == '/login' && token) {
                router.push('/') // Replace '/login' with your desired login page URL
            }else if(!token){
                router.push('/login')
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
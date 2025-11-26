export const isEmailValid = (email: string) => {
 
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
        
        
        if (email.includes('..')) return false; 
        if (email.startsWith('.')) return false; 
        if (email.endsWith('.')) return false; 
        
        return emailRegex.test(email);
    };
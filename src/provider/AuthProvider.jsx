import React, { createContext, useState } from 'react';

const AuthContext = createContext()



const AuthProvider = () => {

    const [user, setUser] = useState({})


    const authInfo = {
        user
    }


    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;
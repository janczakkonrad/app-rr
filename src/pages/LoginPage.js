import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor=""><input type="text"/>Podaj login</label>
            <label htmlFor=""><input type="password"/>Podaj hasło</label>
            <button>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;
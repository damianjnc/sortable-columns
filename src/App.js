import React, {useContext} from 'react';
import Table from './Table';
import Auth from './components/Auth';
import {AuthContext} from "./context/auth-context";

function App() {

    const authContext = useContext(AuthContext);
    
    let content = <Auth/>;
    if (authContext.isAuth) {
        content = <Table/>
    }
    return (
        <div>
            {content}
        </div>
    );
}

export default App;

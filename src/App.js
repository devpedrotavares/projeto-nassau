import Login from './Login';
import ClientHome from './ClientHome';
import AdminHome from './AdminHome';
import {useState} from 'react';

function App(){
    const [component, setComponent] = useState("Login");

    const COMPONENTS = {
        "Login": <Login setComponent={setComponent}/>,
        "ClientHome": <ClientHome/>,
        "AdminHome": <AdminHome/>,
    };


    return(
        <>
            {COMPONENTS[component]}
        </>
    );
}

export default App;
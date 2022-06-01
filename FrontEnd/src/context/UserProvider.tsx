import { useState, useEffect, createContext } from 'react'
import { AuthUser } from '../components/Models/Auth.Model'
import { AuthUserRegister } from '../components/Models/AuthUser.Model'
import clienteAxios from '../config/axios'

const UserContext = createContext(null)



const UserProvider = ({ children }) => {

    const [user, setUser] = useState([])
        useEffect(() => {
    })

    const [userR, registerState] = useState([]);

    const verifyCredentials = async (datos: AuthUser) => {

        const url = `user/${datos.userName}/${datos.password}`;
        console.log(url);
        try {
            const {data}  = await clienteAxios.get(url);
            console.log(data[0]);
            //setUser(data)
        } catch (error) {
            console.log(error);
        }
    }

    const RegisterUser = async (datos: AuthUserRegister) => {

        const url = `user`;
        console.log(url);
        console.log(datos);
        try {
            const {data}  = await clienteAxios.post(url,datos);
            
            registerState(data);
            console.log(data[0]);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                verifyCredentials,
                user,
                RegisterUser,
                userR
            }}
        >
            {children}
        </UserContext.Provider>
    )

}

export {
    UserProvider
}

export default UserContext

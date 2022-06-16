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

        try {
            const { data } = await clienteAxios.get(url);
            localStorage.setItem('idUser', data[0].id);

            //setUser(data)
        } catch (error) {
            console.log(error);
        }
    }

    const RegisterUser = async (datos: AuthUserRegister) => {

        const url = `user`;
        try {
            const { data } = await clienteAxios.post(url, datos);

            registerState(data);

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

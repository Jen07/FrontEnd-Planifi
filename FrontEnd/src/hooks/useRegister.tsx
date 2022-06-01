import { useContext } from "react";
import LoginContext from '../context/UserProvider'

const useRegister = ( )=>{
    return useContext(LoginContext)
}

export default useRegister;


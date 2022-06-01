import { useContext } from "react";
import AlertasContext from '../context/AlertasProvider';

const useArchivos = ( ) =>{
    return useContext(AlertasContext)
}

export default useArchivos;
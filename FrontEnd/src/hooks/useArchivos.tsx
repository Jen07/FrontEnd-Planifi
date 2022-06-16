import { useContext } from "react";
import ArchivosContext from '../context/ArchivosProvider';

const useArchivos = () => {
    return useContext(ArchivosContext)
}

export default useArchivos;
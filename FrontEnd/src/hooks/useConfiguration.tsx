import { useContext } from "react";
import ConfigurationContext from '../context/ConfigurationProvider';

const useConfiguration = ( )=>{
    return useContext(ConfigurationContext)
}

export default useConfiguration;
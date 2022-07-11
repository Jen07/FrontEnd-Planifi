import { useContext } from "react";
import BlockContext from '../context/BlockProvider';

const useBlock = () => {
    return useContext(BlockContext)
}

export default useBlock;
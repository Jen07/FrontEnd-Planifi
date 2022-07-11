import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/axios'

const BlockContext = createContext(null)



const BlockProvider = ({ children }) => {

     const [listBlock, loadBlocks] = useState([]);
     
     const getBlocks = async () => {
          try {
               const { data } = await clienteAxios.get(`Block/${1}`);
                 console.log(data);
             loadBlocks(data);
          } catch (error) {
               console.log(error);
          }
     }
    return (
        <BlockContext.Provider
            value={{
               getBlocks,
               listBlock
            }}
        >
            {children}
        </BlockContext.Provider>
    )

}

export {
     BlockProvider
}

export default BlockContext

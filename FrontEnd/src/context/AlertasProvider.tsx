import { createContext, useState } from 'react';

import Swal from 'sweetalert2';

const AlertasContext = createContext(null);


const AlertasProvider = ({ children }) => {

     const [valido, Alerta] = useState(false);


     const setStateAlerta = (boleano: boolean) =>{
          Alerta(boleano);
     }

     const AlertSuccess = (mgs) => {
         
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: mgs,
               showConfirmButton: false,
               timer: 2700
          });
     }
     return (
          <AlertasContext.Provider
               value={{
                    AlertSuccess,
                    setStateAlerta,
                    valido
               }}
          >
               {children}
          </AlertasContext.Provider>
     )
}

export {
     AlertasProvider,
     
}
export default AlertasContext;
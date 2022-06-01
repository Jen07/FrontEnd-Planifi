import useArchivo from '../../hooks/useArchivos';
import { useNavigate } from "react-router-dom";


const Configuracion = ({ archivo }) => {

     const descargarArchivo = (id: string) => {

     }
     const verArchivo = (id: string) => {

     };


     return (
          <tr>
               <td className='text-center'>{archivo.nombre}</td>
               <td className='text-center'>
                    <button
                         className="btn btn-info m-2"
                         type="button"
                         onClick={() => verArchivo(archivo)}
                    >
                         <i className="fa-solid fa-eye fa-lg" ></i>
                    </button>
                    <button
                         type="button"
                         className="btn btn-danger"
                         onClick={() => descargarArchivo(archivo)}
                    >
                         <i className="fa-solid fa-file-arrow-down"></i>
                    </button>
               </td>
          </tr>
     );

}
export default Configuracion;
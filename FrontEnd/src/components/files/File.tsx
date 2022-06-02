import useArchivo from '../../hooks/useArchivos';
import { useNavigate } from "react-router-dom";


const Configuracion = ({ archivo }) => {
  
      const {deleteFile} = useArchivo();


     const descargarArchivo = (id: string) => {
         
     }
     const eliminarArchivo = (id: string) => {
         // alert(id);
      deleteFile(id);
     };
     return (
          <tr>
               <td className='text-center'>{archivo.name}</td>
               <td className='text-center'>
                    <button
                         className="btn btn-warning text-light m-2"
                         type="button"
                         onClick={()=>descargarArchivo(archivo)}
                    >
                         <i className="fa-solid fa-file-arrow-down"></i>
                    </button>
                    <button
                         type="button"
                         className="btn btn-danger"
                         onClick={() => eliminarArchivo(archivo.id)}
                    >
                         <i className="fa-solid fa-trash-can"></i>
                    </button>
               </td>
          </tr>
     );

}
export default Configuracion;
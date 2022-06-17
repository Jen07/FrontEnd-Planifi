import useArchivo from '../../hooks/useArchivos';
import fileDownload from 'js-file-download'
import { base64StringToBlob } from 'blob-util';
import Swal from 'sweetalert2';
import useAlertas from '../../hooks/useAlertas';
import { Link, useNavigate } from "react-router-dom";

const Configuracion = ({ archivo }) => {

     const redireccionar = useNavigate();

     const { deleteFile, checkAdd, checkDelete, sizeList, isChecked,setIsChecked } = useArchivo();

     const { AlertSuccess } = useAlertas();

     const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
          if (evt.currentTarget.checked) {

               checkAdd(evt.target.value);
          } else {
               checkDelete(evt.target.value);

          }
     }

     const descargarArchivo = (file: any) => {

          const { base64, typeOfFile, name } = file;
          let tipo;
          if (typeOfFile === 'pdf') {
               tipo = 'application/pdf'
          } else if (typeOfFile === 'jpg') {
               tipo = 'image/jpeg';
          } else if (typeOfFile === 'png') {
               tipo = 'image/png';
          } else if (typeOfFile === 'docx') {
               tipo = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document/';
          } else if (typeOfFile === 'xlsx') {
               tipo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          } else if (typeOfFile === 'txt') {
               tipo = 'text/plain';
          } else {
               tipo = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
          }

          // var decodedData = window.atob(base64)
          const blob = base64StringToBlob(base64, tipo);

          fileDownload(blob, `${name}.${typeOfFile}`);
     }

     const eliminarArchivo = (archivo: any) =>

          Swal.fire({
               title: `¿Estas Seguro de eliminar al archivo ${archivo.name}?`,
               text: `Esta opcion es irreversible`,
               icon: 'question',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               cancelButtonText: 'Cancelar',
               confirmButtonText: 'Sí, eliminar todos!'
          }).then((result) => {
               if (result.isConfirmed) {
                    deleteFile(archivo.id);
                    AlertSuccess('Eliminado Correctamente');
               }
          })

     return (
          <tr>
               <td className='text-center'>
                    <input 
                         onChange={handleChange}
                         type="checkbox" className="form-check-input" name=''
                         value={archivo.id}
                    ></input>
               </td>
               <td className='text-center'>{archivo.name}</td>
               <td className='text-center'>{archivo.typeOfFile}</td>
               <td className='text-center'>
                    <button
                         className="btn btn-warning text-light m-2"
                         type="button"
                         onClick={() => descargarArchivo(archivo)}>
                         <i className="fa-solid fa-file-arrow-down"></i>
                    </button>
                    
                    {sizeList >1? 
                    <button  disabled={true}
                         type="button"
                         className="btn btn-danger"
                         onClick={() => eliminarArchivo(archivo)}>
                         <i className="fa-solid fa-trash-can"></i>
                    </button>: 
                    <button 
                         type="button"
                         className="btn btn-danger"
                         onClick={() => eliminarArchivo(archivo)}>
                         <i className="fa-solid fa-trash-can"></i>
                    </button>}      
               </td>
          </tr>
     );

}
export default Configuracion;
import useArchivo from '../../hooks/useArchivos';
import fileDownload from 'js-file-download'
import { base64StringToBlob } from 'blob-util';
import { useState } from 'react';

const Configuracion = ({ archivo }) => {


     const { deleteFile, checkAdd,checkDelete } = useArchivo();

     const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
          if(evt.currentTarget.checked){

               console.log(evt.target.value);
             checkAdd(evt.target.value);
          }else{
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

     const eliminarArchivo = (id: string) => {
          // alert(id);
          deleteFile(id);
     };
     return (
          <tr>
               <td className='text-center'>
                    <input
                         onChange={handleChange}
                         type="checkbox" className="form-check-input" name=''
                         value={archivo}
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
                    <button
                         type="button"
                         className="btn btn-danger"
                         onClick={() => eliminarArchivo(archivo.id)}>
                         <i className="fa-solid fa-trash-can"></i>
                    </button>
               </td>
          </tr>
     );

}
export default Configuracion;
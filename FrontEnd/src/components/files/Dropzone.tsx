import { useCallback, Fragment, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useArchivos from "../../hooks/useArchivos";
import { Link, useNavigate } from "react-router-dom";
import useAlertas from '../../hooks/useAlertas';
import Alert from "../../Alertas/Alerta";

const Dropzone = () => {

     const redireccionar = useNavigate();

     const { loadStateInsert, listFilesInsert, listFilesStateInsert, RegisterFiles } = useArchivos();

     const { AlertSuccess } = useAlertas();

     const { setStateAlerta, valido } = useAlertas();

     //Obtener contenido de Dropzone
     const onDrop = useCallback((acceptedFiles, fileRejections) => {
     
          loadStateInsert(acceptedFiles);

          if (listFilesInsert.length > 0) {
               setStateAlerta(false);
          } else {

          }
     }, [listFilesInsert])

     useEffect(() => {
     }, []);

     const registrarArchivos = () => {

          if (listFilesInsert.length === 0) {
               setStateAlerta(true);
          } else {
               listFilesInsert.forEach((file => {
                    RegisterFiles(file);
               }));
               // listFilesStateInsert(null);
               AlertSuccess('Agregado Correctamente');
               redireccionar('/home/Archivos');
          }
     }



     const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
          onDrop, accept: {
               'image/png': ['.png'],
               'image/jpeg': ['.png'],
               'aplication/pdf': ['.pdf'],
               'application/vnd.openxmlformats-officedocument.wordprocessingml.document/': ['.docx'],
               'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
               'text/plain': ['.txt'],
               'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
          }
     });

     return (
          <Fragment>
               <div className="flex-padre-dropzone">

                    <div className="flex-hijo-dropzone expand2">
                         <div className='dropzone center container-dropzone' {...getRootProps()} >

                              <input className="higth" {...getInputProps()} />
                              <div className="center">
                                   {isDragActive ? <p>Suelta el Archivo</p> :
                                        <div className="flex">
                                             <p>Selecciona un archivo y arrastralo aqui</p>
                                             <button className="btn-subirArchivo" type="button">
                                                  Selecciona archivos para subir
                                             </button>
                                        </div>
                                   }
                              </div>
                         </div>
                         {/* <div className="center">
                    <button className="btn-subirArchivo" type="button"
                         onClick={verArchivos}>
                         Ver archivos
                    </button>
               </div> */}
                         <div className="container-dropzone">
                              <div className="row m-2">

                                   <div className="flex-padre">
                                        <div className="flex-hijo">
                                             <button type="submit" className="btn btn-primary expand"
                                                  onClick={registrarArchivos}> <i className="fa-solid fa-floppy-disk"></i> Agregar</button>
                                        </div>
                                        <div className="flex-hijo">
                                             <Link to={"/home/Archivos"} className="btn btn-warning expand"><i className="fa-solid fa-circle-arrow-left"></i>  Volver</Link>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-8">
                                   {valido ? <Alert>{'Debe agregar Archivos'}</Alert> : null}
                              </div>
                         </div>
                    </div>
                    <div className="flex-hijo-dropzone m-left ex">
                         <div className="list-group">
                              <li className="list-group-item list-group-item-action active bg-black2" aria-current="true">
                                   Lista de Archivos
                              </li>
                              {(listFilesInsert.map((archivo: any) => (
                                   <p>{archivo.Name}</p>

                              ))
                              )}

                         </div>
                    </div>
               </div>

          </Fragment>
     );
}
export default Dropzone;
import { useState, useCallback, Fragment, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useArchivos from "../../hooks/useArchivos";
import { Link, useNavigate } from "react-router-dom";
import Alert from '../../Alertas/Alerta';
import useAlertas from '../../hooks/useAlertas';
import ListFile from "./ListFile";
import Archivo1 from "../Models/Archivo.Model";
import { Archivo } from "../Models/Archivo.Model";
const Dropzone = () => {

     const redireccionar = useNavigate();

     const { loadStateInsert, listFilesInsert, setListInsert, listFileName, RegisterFiles } = useArchivos();

     const { setStateAlerta, valido } = useAlertas();

     //Obtener contenido de Dropzone
     const onDrop = useCallback((acceptedFiles, fileRejections) => {

          console.log(acceptedFiles);
          loadStateInsert(acceptedFiles);
          // listFilesInsert.length > 0 ? Alerta(false):null;
          if (listFilesInsert.length > 0) {
               setStateAlerta(false);
          }

          setLista(listFilesInsert);
     }, [])

     useEffect(() => {
     }, []);

     const [lista, setLista] = useState([]);

     const registrarArchivos = () => {

          lista.forEach((async file => {

               await RegisterFiles(file);
          }))

          redireccionar('/home/Archivos');
     }



     const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({ onDrop });

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
                              {listFilesInsert.length === 0 ? 'Sin Archivos' : (listFilesInsert.map(archivo => (

                                   <ListFile
                                        key={archivo.id}
                                        archivos={archivo}
                                   />
                              ))
                              )}

                              {/* {listFilesInsert.length >0 && <div>
                                   {listFilesInsert.map((archivo, index)=>  
                                   <li className="list-group-item list-group-item-action"
                                   key={archivo.nombre}>{archivo.nombre} 
                                   </li>)
                              }
                              </div>} */}

                         </div>
                    </div>
               </div>

          </Fragment>
     );

}

export default Dropzone;
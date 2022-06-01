import { useState, useCallback, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import useArchivos from "../../hooks/useArchivos";
import { Link } from "react-router-dom";

const Dropzone = () => {

     const { loadStateInsert, listFilesInsert, } = useArchivos();

     const [valido, Alerta] = useState(false);

     //Obtener contenido de Dropzone
     const onDrop = useCallback((acceptedFiles) => {
          loadStateInsert(acceptedFiles);
          // listFilesInsert.length > 0 ? Alerta(false):null;
          if (listFilesInsert.length > 0) {
               Alerta(false);
          }
          verArchivos();
     }, [])


     const verArchivos = () => {

          if (listFilesInsert.length == 0) {
               Alerta(true);
          } else {
               listFilesInsert.forEach(archivo => {
                    console.log(archivo.nombre)
               })
               Alerta(false);
          }
     }

     const registrarArchivos = () => {

          if (listFilesInsert.length == 0) {
               Alerta(true);
          } else {
               //Registrar en Mongo
               // listFilesInsert.forEach(archivo => {
               //console.log(archivo.nombre)
               // })
               Alerta(false);
          }
     }

     const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

     return (
          <Fragment>
               <div className='dropzoneCSS center'  >
                    <div {...getRootProps()}>

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
               </div>
               {/* <div className="center">
                    <button className="btn-subirArchivo" type="button"
                         onClick={verArchivos}>
                         Ver archivos
                    </button>
               </div> */}
               <div className="row">
                    <div className="col-8">
                         {valido ? <div className="alert alert-danger center ms-5 p-2" role="alert">
                              Debe agregar Archivos
                         </div> : null}
                    </div>

                    <div className="row">
                         <div className="col-10">
                              <button type="submit" className="btn btn-primary"
                                   onClick={registrarArchivos}> <i className="fa-solid fa-floppy-disk"></i> Agregar</button>
                         </div>
                         <div className="col-2">
                              <Link to={"/home/Archivos"} className="btn btn-warning m-1"><i className="fa-solid fa-circle-arrow-left"></i>  Volver</Link>
                         </div>
                    </div>
               </div>
          </Fragment>
     );

}

export default Dropzone;
import { Fragment, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import Sidebar from '../sidebar';
import useArchivos from '../../hooks/useArchivos';
import useArlertas from '../../hooks/useAlertas';
import File from '../files/File';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
var zip = require('jszip')();

const Files = () => {

     const { listFilesMemPool, getFiles, sizeList, deleteFile, listFilesCheck, updateState,setListCheck, setIsChecked,isChecked } = useArchivos();

     const { AlertSuccess } = useArlertas();

     useEffect(() => {
          getFiles();
     }, [listFilesMemPool])

     const deleteSelected = () => {
          Swal.fire({
               title: `¿Estas Seguro de eliminar ${sizeList} Archivos?`,
               text: `Esta opcion es irreversible`,
               icon: 'question',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               cancelButtonText: 'Cancelar',
               confirmButtonText: 'Sí, eliminar todos!'
          }).then((result) => {
               if (result.isConfirmed) {
                    listFilesCheck.forEach((aid: any) => {
                         deletegroup(aid);
                    });
               }
               updateState();
          })
          if (sizeList === 0) {
               AlertSuccess('Archivos eliminados Correctamente');
          }
          //sizeList == 0 ? AlertSuccess('Archivos eliminados Correctamente'): '';
     }

     const deletegroup = (aid: string) => {
          deleteFile(aid);
          setListCheck();
     }


     const downloadSelected = () => {
          listFilesCheck.map((fileId) => {
               let objectFile = listFilesMemPool.find(e => e.id === fileId);
               let name = objectFile.name + "." + objectFile.typeOfFile;
               zip.file(name, objectFile.base64, { base64: true });
          })

          zip.generateAsync({ type: 'blob' }).then(function (content) {
               saveAs(content, 'Archivos.zip')
          })
          zip = require('jszip')();
          setListCheck();
          //setIsChecked(false);
          //setIsChecked(!isChecked);
     }


     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className='container'>
                         <div className="d-padre m-botton">
                              <div className='d-hijo'>
                                   <Link to={"/home/RegistrarArchivo"}
                                        id="btn__registrarse"
                                        className="btn btn-primary"><i className="fa-solid fa-square-plus fa-2x"></i></Link>
                              </div>

                              <div className='d-hijo'>

                                   {sizeList >= 2 ? (
                                        <button onClick={deleteSelected} className='btn btn-danger m-right'>Eliminar Seleccionados</button >
                                   ) : null}
                                   {sizeList >= 2 ? (
                                        <button onClick={downloadSelected} className='btn btn-warning text-light'>Descargar Seleccionados</button>
                                   ) : null}
                              </div>

                         </div>



                         <table className="table table-hover">
                              <thead className="bg-black2 text-light">
                                   <tr className="bg-black2 text-light">
                                        <th className='text-center' scope="col">Selected</th>
                                        <th className='text-center' scope="col">Nombre Archivo</th>
                                        <th className='text-center' scope="col">Tipo Archivo</th>
                                        <th className='text-center' scope="col">Acciones</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {listFilesMemPool.length === 0 ? 'No hay Archivos' : (listFilesMemPool.map((file: any) => (
                                        <File key={file.id} archivo={file} />
                                   )))}
                              </tbody>
                         </table>
                    </div>

               </div>
          </Fragment>
     );
}
export default Files;